@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Lista de Ofertas</div>

                <div class="panel-body">
                    
                <form action="{{route('ofertas.store')}}" method="post">
                    {{ csrf_field() }}
                    @include('ofertas._form') 
                    
                    <button type="submit" class="btn btn-default">Salvar</button>
                </form>                 

                </div>
            </div>
        </div>
    </div>
</div>
@endsection