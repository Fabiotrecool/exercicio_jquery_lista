$(document).ready(function() {
    $('#nova-tarefa-btn').click(function() {
        e.preventDefault();

    });

    $('#tarefa-form').on('submit', function(e) {
        e.preventDefault();
        const tarefa = $('#nova-tarefa').val().trim();
        if(tarefa) {
            const novoItem = $('<li></li>');
            const textoTarefa = $('<span></span>').text(tarefa);
            const botaoExcluir = $('<button class="excluir-tarefa">Excluir</button>');

            textoTarefa.click(function() {
                $(this).toggleClass('completed');
            });

            botaoExcluir.click(function(e) {
                e.stopPropagation();
                $(this).parent().remove();
            });

            novoItem.append(textoTarefa).append(botaoExcluir);
            $('#lista-tarefas').append(novoItem);

            $('#nova-tarefa').val('');
        }
    });

    $('#botao-excluir').click(function() {
        $('#tarefa-form')[0].reset();
    });
});