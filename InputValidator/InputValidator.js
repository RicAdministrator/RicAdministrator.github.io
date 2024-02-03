const app = Vue.createApp({
    data() {
        return {
            inpAddress: '',
            feedbackText: 'This is a required field.',
            myClass: 'invalid',

            inpAddress2: '',
            feedbackText2: 'This is a required field.',
            myClass2: 'invalid',

            inpAddress3: '',
            feedbackText3: 'This is a required field.',
            myClass3: 'invalid',

            inpAddress4: '',
            feedbackText4: 'This is a required field.',
            myClass4: 'invalid',
        }
    },
    watch: {
        inpAddress(newVal, oldVal) {
            if (newVal == "") {
                this.feedbackText = 'This is a required field.';
                this.myClass = 'invalid';
            }
            else {
                this.feedbackText = 'Input is correct.';
                this.myClass = 'valid'
            }
        },
        inpAddress2(newVal, oldVal) {
            if (newVal == "") {
                this.feedbackText2 = 'This is a required field.';
                this.myClass2 = 'invalid';
            }
            else if (newVal.match(/[^$,.\d]/)) {
                this.feedbackText2 = 'This is a numeric field.';
                this.myClass2 = 'invalid';
            }
            else {
                this.feedbackText2 = 'Input is correct.';
                this.myClass2 = 'valid'
            }
        },
        inpAddress3(newVal, oldVal) {
            let patternOneLowerCase = new RegExp(
                "^(?=.*[a-z]).+$"
            );

            let patternOneUpperCase = new RegExp(
                "^(?=.*[A-Z]).+$"
            );

            let patternOneNumeric = new RegExp(
                "^(?=.*\\d).+$"
            );

            let patternOneSpecial = new RegExp(
                "^(?=.*[-+_!@#$%^&*., ?]).+$"
            );

            if (newVal == "") {
                this.feedbackText3 = 'This is a required field.';
                this.myClass3 = 'invalid';
            }
            else if (!patternOneLowerCase.test(newVal)) {
                this.feedbackText3 = 'This field requires atleast 1 lowercase letter.';
                this.myClass3 = 'invalid';
            }
            else if (!patternOneUpperCase.test(newVal)) {
                this.feedbackText3 = 'This field requires atleast 1 uppercase letter.';
                this.myClass3 = 'invalid';
            }
            else if (!patternOneNumeric.test(newVal)) {
                this.feedbackText3 = 'This field requires atleast 1 numeric character.';
                this.myClass3 = 'invalid';
            }
            else if (!patternOneSpecial.test(newVal)) {
                this.feedbackText3 = 'This field requires atleast 1 special character.';
                this.myClass3 = 'invalid';
            }
            else if (newVal.length < 10) {
                this.feedbackText3 = 'This field requires atleast 10 characters.';
                this.myClass3 = 'invalid';
            }
            else {
                this.feedbackText3 = 'Input is correct.';
                this.myClass3 = 'valid'
            }
        },
        inpAddress4(newVal, oldVal) {
            let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

            if (newVal == "") {
                this.feedbackText4 = 'This is a required field.';
                this.myClass4 = 'invalid';
            }
            else if (!emailPattern.test(newVal)) {
                this.feedbackText4 = 'This is an invalid email.';
                this.myClass4 = 'invalid';
            }
            else {
                this.feedbackText4 = 'Input is correct.';
                this.myClass4 = 'valid'
            }
        },
    }
})
app.mount('#app')