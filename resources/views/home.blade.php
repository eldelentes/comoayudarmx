@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Cards</div>

                <div class="panel-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    {!! Form::open(['route' => 'cards.store']) !!}
                        <div class="form-group">
                            <label for="email">Titulo:</label>
                            <input type="text" name="title" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="email">Descripción:</label>
                            <input type="text" name="description" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="email">Tipo:</label>
                            <input type="text" name="type" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="email">Locación:</label>
                            <input type="text" name="location" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="email">Web:</label>
                            <input type="text" name="link" class="form-control">
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                    {!! Form::close() !!}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
