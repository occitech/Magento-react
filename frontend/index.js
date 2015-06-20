import React from 'react';
import Paypal from './Paypal';

document.addEventListener('DOMContentLoaded', init);

function init() {
    let sidebar = document.querySelector('.sidebar');
    React.render(
        <Paypal />,
        sidebar
    );
}
