function Calculator(){
    this.display = document.querySelector(".display")

    this.iStarted = () => {
        this.clickButtons();
        this.pressesEnter();
        this.pressesBackSpace();
    };
    
    this.pressesEnter= () => {
        this.display.addEventListener('keyup', e => {
            if (e.keyCode === 13){
                this.performsAccount();
            };
        })
    }

    this.clickButtons = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.performsAccount();
        });
    };
    
    this.performsAccount = () => {
        try {
            const account = eval(this.display.value)

            if(!account) {
                alert('invalid account')
                return
            }

            this.display.value = account
        } catch (e) {
            alert('invalid account')
            return
        }
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1)

}

const calculator = new Calculator();
calculator.iStarted()