class FeaturedImagePreview {
    constructor(inputElement, imgElement, buttonElement) {
        this.imgInput = inputElement;
        this.imgPreview = imgElement;
        this.clearBtn = buttonElement;
    }

    mount() {
        this.imgInput.addEventListener('change', () => {
            this.onFileChange();
        });
        this.clearBtn.addEventListener('click', () => {
            this.clearAll();
        });
    }

    onFileChange() {
        const file = this.imgInput.files && this.imgInput.files[0];
        if (!file) {
            return;
        }

        this.imgPreview.src = URL.createObjectURL(file);
    }

    clearAll() {
        URL.revokeObjectURL(this.imgPreview.src);
        this.imgPreview.src = '';
        this.imgInput.value = null;
    }
}

document.addEventListener('readystatechange', (event) => {
    if (event.target.readyState === 'complete') {
        // initialize featured image preview
        document.querySelectorAll('[data-image-preview]').forEach((container) => {
            const imgInput = container.querySelector(container.dataset.selFileInput);
            const imgPreview = container.querySelector(container.dataset.selImg);
            const clearBtn = container.querySelector(container.dataset.selClearBtn);

            new FeaturedImagePreview(imgInput, imgPreview, clearBtn).mount();
        });
    }
});