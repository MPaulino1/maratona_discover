const Modal = {
    open(){
        //open modal
        //Add a class active ao modal
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },
    close(){
        //close modal
        //remove class active modal
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')
    }
}