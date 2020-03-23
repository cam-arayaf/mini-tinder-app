import karl from './../assets/img/users/karl.jpg';
import martin from './../assets/img/users/martin.jpg';
import emily from './../assets/img/users/emily.jpg';
import michael from './../assets/img/users/michael.jpg';
import dwight from './../assets/img/users/dwight.jpg';
import jessica from './../assets/img/users/jessica.jpg';
import alexandra from './../assets/img/users/alexandra.jpg';

export const getImage = name => {
    switch (name) {
        case 'Karl':
            return karl;
        case 'Martin':
            return martin;
        case 'Emily':
            return emily;
        case 'Michael':
            return michael;
        case 'Dwight':
            return dwight;
        case 'Jessica':
            return jessica;
        case 'Alexandra':
            return alexandra;
        default:
            return;
    }
}