const calculator = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcDay = document.querySelector('.calc-day');
    const calcCount = document.querySelector('.calc-count');
    const totalValue = document.getElementById('total');

    const countSum = () => {
        let total = 0;
        let countValue = 1;
        let dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value;
        if (typeValue === ''){
            totalValue.textContent = '';
            calcSquare.value = '';
            calcCount.value = '';
            calcDay.value = '';
        }
        let squareValue = +calcSquare.value;

        if (calcCount.value > 1) {
            countValue += (calcCount.value - 1) / 10;
        }
        if (calcDay.value && calcDay.value < 5) {
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10) {
            dayValue *= 1.5;
        }

        if (typeValue && squareValue) {
            total = price * typeValue * squareValue * countValue * dayValue;
        }

        if (total === 0) {
            totalValue.textContent = total;
        } else {
            let tmp = 1;
            const numberAnimation = () => {
                let animId = requestAnimationFrame(numberAnimation);
                if (tmp < total) {
                    totalValue.textContent = tmp;
                } else {
                    totalValue.textContent = total.toFixed(2);
                    cancelAnimationFrame(animId);
                }
                tmp += Math.floor(price * squareValue * dayValue * countValue * 0.03);
            };
            numberAnimation();
        }
    }

    calcBlock.addEventListener('input', event => {
        const target = event.target;
        if (target.matches('input')) {
            target.value = target.value.replace(/\D/, '');
        }
    });
    calcBlock.addEventListener('change', event => {
        let target = event.target;
        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    });
}

export default calculator;