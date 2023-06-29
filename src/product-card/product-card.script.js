import mobileBag1 from '../../assets/images/mobile-bag1.png'
import mobileBag2 from '../../assets/images/mobile-bag2.png'
import mobileBag3 from '../../assets/images/mobile-bag3.png'
import mobileBag4 from '../../assets/images/mobile-bag4.png'
import desktopBag1 from '../../assets/images/desktop-bag1.png'
import desktopBag2 from '../../assets/images/desktop-bag2.png'
import desktopBag3 from '../../assets/images/desktop-bag3.png'
import desktopBag4 from '../../assets/images/desktop-bag4.png'

const desktopImage = document.querySelector('#image1');
const mobileImage = document.querySelector('#image2');
const colors = document.querySelectorAll('.product-card__color');
const button = document.querySelector('button');



[...colors].map(color => color.addEventListener('click', (e) => {
        const newArr = [...colors];
        const ans = newArr.find(elem => [...elem.classList].includes('product-card__color--selected'))
        if (ans !== undefined) {
            ans.classList.remove('product-card__color--selected');
        };

        e.target.classList.add('product-card__color--selected');

        if([...e.target.classList].includes('product-card__color--1')) {
            desktopImage.src = desktopBag1;
            mobileImage.src = mobileBag1;
        }else if([...e.target.classList].includes('product-card__color--2')) {
            desktopImage.src = desktopBag2;
            mobileImage.src = mobileBag2;
        }else if([...e.target.classList].includes('product-card__color--3')) {
            desktopImage.src = desktopBag3;
            mobileImage.src = mobileBag3;
        }else if([...e.target.classList].includes('product-card__color--4')) {
            desktopImage.src = desktopBag4;
            mobileImage.src = mobileBag4;
        }
    })
);

const showMessage = (elem) => {
    elem.addEventListener('click', (e) => {
        const newArr = [...colors];
        const ans = newArr.find(elem => [...elem.classList].includes('product-card__color--selected'))
        if (ans !== undefined) {
            if ([...ans.classList].includes('product-card__color--1')) {
               return alert(`The salmon wallet has been added to the cart`);
            }else if ([...ans.classList].includes('product-card__color--2')) {
               return alert(`The pink wallet has been added to the cart`);
            }else if ([...ans.classList].includes('product-card__color--3')) {
               return alert(`The yellow wallet has been added to the cart`);
            }else if ([...ans.classList].includes('product-card__color--4')) {
               return alert(`The gray wallet has been added to the cart`);
            }
        }
        return alert(`please pick a color`)
    })
};

showMessage(button);