/**
 * Componente para criar uma seção de imagens responsivas
 * @param {Object} config - Configuração da seção de imagens
 */
export function createResponsiveImageSection(config = {}) {
    const {
        containerClass = 'responsive-image-section',
        targetSelector = '.secao-principal.row-fluid.sem-coluna',
        mobileImages = [],
        desktopImages = [],
        links = [],
        openInNewTab = false,
        useAfter = true,
        borderRadius = '20px',
        gap = '4px'
    } = config;

    const newSection = document.createElement('div');
    newSection.classList.add(containerClass);

    // Adiciona imagens à seção
    const imageCount = Math.min(mobileImages.length, desktopImages.length, links.length);
    
    for (let i = 0; i < imageCount; i++) {
        const link = document.createElement('a');
        link.href = links[i];
        if (openInNewTab) {
            link.target = '_blank'; // Opcional: abrir em nova aba
        }

        const picture = document.createElement('picture');

        const sourceMobile = document.createElement('source');
        sourceMobile.media = "(max-width: 768px)";
        sourceMobile.srcset = mobileImages[i];

        const img = document.createElement('img');
        img.src = desktopImages[i];
        img.alt = `Image ${i + 1}`;

        picture.appendChild(sourceMobile);
        picture.appendChild(img);
        link.appendChild(picture);
        newSection.appendChild(link);
    }

    // Insere a nova seção relativamente ao elemento alvo
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
        if (useAfter) {
            targetElement.insertAdjacentElement('afterend', newSection);
        } else {
            targetElement.insertAdjacentElement('beforebegin', newSection);
        }
        
        // Adiciona estilos CSS
        const style = document.createElement('style');
        style.textContent = `
            .${containerClass} {
                display: flex;
                gap: ${gap};
            }

            .${containerClass} img {
                width: 100%;
                height: auto;
                object-fit: contain;
                border-radius: ${borderRadius};
            }

            @media (max-width: 768px) {
                .${containerClass} {
                    flex-direction: column;
                }

                .${containerClass} img {
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                }
            }
        `;
        document.head.appendChild(style);
        
        console.log(`Seção de imagens responsivas (${containerClass}) criada com sucesso`);
        return true;
    } else {
        console.warn(`Elemento alvo ${targetSelector} não encontrado`);
        return false;
    }
}