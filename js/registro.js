//validar campos
function registrar(control)
{
    if(control.value=='')
    {
        alert("Debe ingresar datos en el campo de su ' + control.name");
    }
}

//limpiar datos
function vaciar(control)
control.value=='';

//focus
function focus()
{
    document.formulario.nombre.focus();
}