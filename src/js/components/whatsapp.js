export const initWhatsAppButton = () => {
    // Verificar se jQuery está disponível
    if (typeof $ === 'undefined') {
        console.error('jQuery não está disponível para o botão WhatsApp');
        return;
    }

    $(document).ready(() => {
        $("body").append(`
            <div class="whatsapp2-button2">
                <a href="https://linktr.ee/mercosulatendimento" target="_blank">
                    <i class="fa fa-whatsapp" id="widiconwhatsap"></i>
                </a>
            </div>
        `);
    });
};