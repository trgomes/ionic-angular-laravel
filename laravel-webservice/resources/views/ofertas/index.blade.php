@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
                <div class="panel-heading">Lista de Ofertas</div>

                <div class="panel-body">

                    
                    <a href="{{route('ofertas.create')}}" class="btn btn-success">Adicionar oferta</a>
                                       

                    <table class="table">
                        <thead>
                            <tr>                            
                                <th>ID</th>
                                <th>Titulo</th>
                                <th>Descrição</th>
                                <th>Validade</th>
                                <th>Valor</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($ofertas as $oferta)
                                <tr>
                                    <td>{{$oferta->id}}</td>
                                    <td>{{$oferta->titulo}}</td>
                                    <td>{{$oferta->descricao}}</td>
                                    <td>{{$oferta->validade}}</td>
                                    <td>{{$oferta->valor_f}}</td>
                                    <td>                                        
                                        <form action="{{route('ofertas.destroy',$oferta->id)}}" method="post">
                                            <a href="{{route('ofertas.edit',$oferta->id)}}" class="btn btn-warning btn-xs">Editar</a>
                                            {{ csrf_field() }}
                                            {{ method_field('DELETE') }}
                                            <button class="btn btn-danger btn-xs">Excluir</buttona>
                                        </form>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>                   

                </div>
            </div>
        </div>
    </div>
</div>
@endsection