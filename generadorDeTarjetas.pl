#!usr/bin/perl
use warnings;
use strict;
use Getopt::Long;

GetOptions(
  'archivo=s' => \my $archivo,
) or die "Opciones inválidas introducidas a $0\n";

my @Tarjetas=creadorDeTarjetas($archivo);

open OUT,">>tarjetas.txt" or die "error al crear archivo de salida\n";
print OUT @Tarjetas;
close OUT;

print "Las tarjetas han sido creadas exitosamente en tarjetas.txt\n";


#_____________________________FUNCIONES______________________#
#Esta función toma un archivo de texto con los valores de la tarjeta entre comillas dobles y separados por \t y gener una tarjeta para cada línea del archivo
sub creadorDeTarjetas{
  my $input=shift;
  my @output;

  open IN,"$input" or die "error al abrir $input, $!\n";
  my @info=<IN>;
  close IN;

  foreach my $dato(@info) {
    chomp $dato;
    my @pts=split/\t/,$dato;
    my $titulo=$pts[0];
    my $des=$pts[1];
    my $tipo=$pts[2];
    my $lugar=$pts[3];
    my $link= $pts[4];

    my $tarjeta= "{title: $titulo, description: $des, type: $tipo, location: $lugar, link: $link},\n";
    push @output, $tarjeta;
    }
  return @output;
}
