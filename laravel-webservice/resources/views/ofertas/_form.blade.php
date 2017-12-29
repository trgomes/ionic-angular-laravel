<div class="form-group">
    <label>Titulo</label>
    <input type="text" class="form-control" name="titulo" value="{{ isset($oferta->titulo) ? $oferta->titulo : '' }}">
</div>  

<div class="form-group">
    <label>Descrição</label>
    <input type="text" class="form-control" name="descricao" value="{{ isset($oferta->descricao) ? $oferta->descricao : '' }}">
</div>

<div class="form-group">
    <label>Validade</label>
    <input type="date" class="form-control" name="validade" value="{{ isset($oferta->validade) ? $oferta->validade : '' }}">
</div>

<div class="form-group">
    <label>Valor (Ex.: 5.60)</label>
    <input type="number" step="any" class="form-control" name="valor" value="{{ isset($oferta->valor) ? $oferta->valor : '' }}">
</div>  
