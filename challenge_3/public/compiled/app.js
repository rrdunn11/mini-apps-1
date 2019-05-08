
class App extends React.Component {
    constructor() {
        super();
        this.form1Data = {};
        this.form2Data = {};
        this.form3Data = {};
        this.state = {
            submittedForm: 0
        };
    }

    onForm1Submit(e) {
        e.preventDefault();
        var nameElem = document.getElementById('name');
        var emailElem = document.getElementById('email');
        var passwordElem = document.getElementById('password');
        this.form1Data = {
            name: nameElem.value,
            email: emailElem.value,
            password: passwordElem.value
        };
        console.log(this.form1Data);
        this.setState({
            submittedForm: this.state.submittedForm + 1
        });
    }

    onForm2Submit(e) {
        e.preventDefault();
        var address1Elem = document.getElementById('address1');
        var address2Elem = document.getElementById('address2');
        var address3Elem = document.getElementById('address3');
        var cityElem = document.getElementById('city');
        var stateElem = document.getElementById('state');
        var zipCodeElem = document.getElementById('zipCode');
        var phoneNumberElem = document.getElementById('phoneNumber');
        this.form2Data = {
            address1: address1Elem.value,
            address2: address2Elem.value,
            address3: address3Elem.value,
            city: cityElem.value,
            state: stateElem.value,
            zipCode: zipCodeElem.value,
            phoneNumber: phoneNumberElem.value
        };
        console.log(this.form2Data);
        this.setState({
            submittedForm: this.state.submittedForm + 1
        });
    }

    onForm3Submit(e) {
        e.preventDefault();
        var creditCardElem = document.getElementById('creditCard');
        var expiryDateElem = document.getElementById('expiryDate');
        var ccvElem = document.getElementById('ccv');
        var billingZipCodeElem = document.getElementById('billingZipCode');
        this.form3Data = {
            creditCard: creditCardElem.value,
            expiryDate: expiryDateElem.value,
            ccv: ccvElem.value,
            billingZipCode: billingZipCodeElem.value
        };
        console.log(this.form3Data);
        this.setState({
            submittedForm: this.state.submittedForm + 1
        });
    }

    formSendHttpRequest(e) {
        e.preventDefault();
        var allData = Object.assign({}, this.form1Data, this.form2Data, this.form3Data);
        var endPoint = '/';
        $.ajax({
            url: endPoint,
            method: "POST",
            data: allData,
            success: result => {
                console.log(result);
            }
        });
    }

    render() {
        let comp;
        switch (this.state.submittedForm) {
            case 0:
                comp = React.createElement(Form1, {
                    onForm1Submit: this.onForm1Submit.bind(this)
                });
                break;
            case 1:
                comp = React.createElement(Form2, {
                    onForm2Submit: this.onForm2Submit.bind(this)
                });
                break;
            case 2:
                comp = React.createElement(Form3, {
                    onForm3Submit: this.onForm3Submit.bind(this)
                });
                break;
            case 3:
                var allData = Object.assign({}, this.form1Data, this.form2Data, this.form3Data);
                comp = React.createElement(Summary, {
                    allData: allData,
                    formSendHttpRequest: this.formSendHttpRequest.bind(this)
                });
                break;
        }
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Welcome to Roger\'s Store!'
            ),
            comp
        );
    }
}

//F1 collects name, email, and password for account creation.


var Form1 = ({ onForm1Submit }) => React.createElement(
    'div',
    { id: 'form1' },
    React.createElement(
        'h2',
        null,
        'Step 1: Sign Up'
    ),
    React.createElement(
        'form',
        { action: '' },
        'Name: ',
        React.createElement('br', null),
        React.createElement('input', { id: 'name', type: 'text' }),
        React.createElement('br', null),
        'Email: ',
        React.createElement('br', null),
        React.createElement('input', { id: 'email', type: 'text' }),
        React.createElement('br', null),
        'Password: ',
        React.createElement('br', null),
        React.createElement('input', { id: 'password', type: 'text' }),
        React.createElement('br', null),
        React.createElement(
            'button',
            { id: 'form1Submit', onClick: e => onForm1Submit(e) },
            'Next'
        )
    )
);

//F2 collects ship to address (line 1, line 2, city, state, zip code) and phone number.


var Form2 = ({ onForm2Submit }) => React.createElement(
    'div',
    { id: 'form2' },
    React.createElement(
        'h2',
        null,
        'Step 2: Enter Shipping Address'
    ),
    React.createElement(
        'form',
        null,
        'Address (line1): ',
        React.createElement('br', null),
        React.createElement('input', { id: 'address1', type: 'text' }),
        ' ',
        React.createElement('br', null),
        'Address (line2): ',
        React.createElement('br', null),
        React.createElement('input', { id: 'address2', type: 'text' }),
        ' ',
        React.createElement('br', null),
        'Address (line3): ',
        React.createElement('br', null),
        React.createElement('input', { id: 'address3', type: 'text' }),
        ' ',
        React.createElement('br', null),
        'City: ',
        React.createElement('br', null),
        React.createElement('input', { id: 'city', type: 'text' }),
        ' ',
        React.createElement('br', null),
        'State: ',
        React.createElement('br', null),
        React.createElement('input', { id: 'state', type: 'text' }),
        ' ',
        React.createElement('br', null),
        'Zip Code: ',
        React.createElement('br', null),
        React.createElement('input', { id: 'zipCode', type: 'text' }),
        ' ',
        React.createElement('br', null),
        'Phone Number: ',
        React.createElement('br', null),
        React.createElement('input', { id: 'phoneNumber', type: 'text' }),
        ' ',
        React.createElement('br', null),
        React.createElement(
            'button',
            { onClick: e => onForm2Submit(e) },
            'Next'
        )
    )
);

//F3 collects credit card #, expiry date, CVV, and billing zip code.


var Form3 = ({ onForm3Submit }) => React.createElement(
    'div',
    { id: 'form3' },
    React.createElement(
        'h2',
        null,
        'Step 3: Enter Payment Information'
    ),
    React.createElement(
        'form',
        { action: '' },
        'Credit Card#: ',
        React.createElement('br', null),
        React.createElement('input', { id: 'creditCard', type: 'text' }),
        ' ',
        React.createElement('br', null),
        'Expiry date: ',
        React.createElement('br', null),
        React.createElement('input', { id: 'expiryDate', type: 'text' }),
        React.createElement('br', null),
        'CVV: ',
        React.createElement('br', null),
        React.createElement('input', { id: 'ccv', type: 'text' }),
        React.createElement('br', null),
        'Billing Zip Code: ',
        React.createElement('br', null),
        React.createElement('input', { id: 'billingZipCode', type: 'text' }),
        React.createElement('br', null),
        React.createElement(
            'button',
            { onClick: e => onForm3Submit(e) },
            'Next'
        )
    )
);

var Summary = ({ allData, formSendHttpRequest }) => React.createElement(
    'div',
    null,
    'Name: ',
    allData.name,
    React.createElement('br', null),
    'Email: ',
    allData.email,
    React.createElement('br', null),
    'Password: ',
    allData.password,
    React.createElement('br', null),
    'Address1: ',
    allData.address1,
    React.createElement('br', null),
    'Address2: ',
    allData.address2,
    React.createElement('br', null),
    'Address3: ',
    allData.address3,
    React.createElement('br', null),
    'City: ',
    allData.city,
    React.createElement('br', null),
    'State: ',
    allData.state,
    React.createElement('br', null),
    'Zip Code: ',
    allData.zipCode,
    React.createElement('br', null),
    'Phone: ',
    allData.phoneNumber,
    React.createElement('br', null),
    'CreditCard: ',
    allData.creditCard,
    React.createElement('br', null),
    'Expiry Date: ',
    allData.expiryDate,
    React.createElement('br', null),
    'CCV: ',
    allData.ccv,
    React.createElement('br', null),
    'Billing Zip Code: ',
    allData.billingZipCode,
    React.createElement('br', null),
    React.createElement(
        'button',
        { onClick: e => formSendHttpRequest(e) },
        'Purchase'
    )
);

export default App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJmb3JtMURhdGEiLCJmb3JtMkRhdGEiLCJmb3JtM0RhdGEiLCJzdGF0ZSIsInN1Ym1pdHRlZEZvcm0iLCJvbkZvcm0xU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibmFtZUVsZW0iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZW1haWxFbGVtIiwicGFzc3dvcmRFbGVtIiwibmFtZSIsInZhbHVlIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm9uRm9ybTJTdWJtaXQiLCJhZGRyZXNzMUVsZW0iLCJhZGRyZXNzMkVsZW0iLCJhZGRyZXNzM0VsZW0iLCJjaXR5RWxlbSIsInN0YXRlRWxlbSIsInppcENvZGVFbGVtIiwicGhvbmVOdW1iZXJFbGVtIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImFkZHJlc3MzIiwiY2l0eSIsInppcENvZGUiLCJwaG9uZU51bWJlciIsIm9uRm9ybTNTdWJtaXQiLCJjcmVkaXRDYXJkRWxlbSIsImV4cGlyeURhdGVFbGVtIiwiY2N2RWxlbSIsImJpbGxpbmdaaXBDb2RlRWxlbSIsImNyZWRpdENhcmQiLCJleHBpcnlEYXRlIiwiY2N2IiwiYmlsbGluZ1ppcENvZGUiLCJmb3JtU2VuZEh0dHBSZXF1ZXN0IiwiYWxsRGF0YSIsIk9iamVjdCIsImFzc2lnbiIsImVuZFBvaW50IiwiJCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwic3VjY2VzcyIsInJlc3VsdCIsInJlbmRlciIsImNvbXAiLCJiaW5kIiwiRm9ybTEiLCJGb3JtMiIsIkZvcm0zIiwiU3VtbWFyeSJdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhCLENBQWlDO0FBQzdCQyxrQkFBYztBQUNWO0FBQ0EsYUFBS0MsU0FBTCxHQUFpQixFQUFq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RHhCO0FBQUE7QUFFWStCLFlBQVE3QixLQUZwQjtBQUUwQixtQ0FGMUI7QUFBQTtBQUdlNkIsWUFBUTVCLFFBSHZCO0FBR2dDLG1DQUhoQztBQUFBO0FBSWU0QixZQUFRaEIsUUFKdkI7QUFJZ0MsbUNBSmhDO0FBQUE7QUFLZWdCLFlBQVFmLFFBTHZCO0FBS2dDLG1DQUxoQztBQUFBO0FBTWVlLFlBQVFkLFFBTnZCO0FBTWdDLG1DQU5oQztBQUFBO0FBT1djLFlBQVFiLElBUG5CO0FBT3dCLG1DQVB4QjtBQUFBO0FBUVlhLFlBQVF6QyxLQVJwQjtBQVEwQixtQ0FSMUI7QUFBQTtBQVNleUMsWUFBUVosT0FUdkI7QUFTK0IsbUNBVC9CO0FBQUE7QUFVWVksWUFBUVgsV0FWcEI7QUFVZ0MsbUNBVmhDO0FBQUE7QUFXaUJXLFlBQVFMLFVBWHpCO0FBV29DLG1DQVhwQztBQUFBO0FBWWtCSyxZQUFRSixVQVoxQjtBQVlxQyxtQ0FackM7QUFBQTtBQWFVSSxZQUFRSCxHQWJsQjtBQWFzQixtQ0FidEI7QUFBQTtBQWN1QkcsWUFBUUYsY0FkL0I7QUFjOEMsbUNBZDlDO0FBZUk7QUFBQTtBQUFBLFVBQVEsU0FBVXBDLENBQUQsSUFBT3FDLG9CQUFvQnJDLENBQXBCLENBQXhCO0FBQUE7QUFBQTtBQWZKLENBREo7O0FBb0JBLGVBQWVWLEdBQWYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZm9ybTFEYXRhID0ge307XG4gICAgICAgIHRoaXMuZm9ybTJEYXRhID0ge307XG4gICAgICAgIHRoaXMuZm9ybTNEYXRhID0ge307XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzdWJtaXR0ZWRGb3JtOiAwLFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Gb3JtMVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIG5hbWVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcbiAgICAgICAgdmFyIGVtYWlsRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xuICAgICAgICB2YXIgcGFzc3dvcmRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyk7XG4gICAgICAgIHRoaXMuZm9ybTFEYXRhID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZUVsZW0udmFsdWUsXG4gICAgICAgICAgICBlbWFpbDogZW1haWxFbGVtLnZhbHVlLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkRWxlbS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtMURhdGEpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWl0dGVkRm9ybTogdGhpcy5zdGF0ZS5zdWJtaXR0ZWRGb3JtKzEsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRm9ybTJTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBhZGRyZXNzMUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzczEnKTtcbiAgICAgICAgdmFyIGFkZHJlc3MyRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzMicpO1xuICAgICAgICB2YXIgYWRkcmVzczNFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3MzJyk7XG4gICAgICAgIHZhciBjaXR5RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5Jyk7XG4gICAgICAgIHZhciBzdGF0ZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGUnKTtcbiAgICAgICAgdmFyIHppcENvZGVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ppcENvZGUnKTtcbiAgICAgICAgdmFyIHBob25lTnVtYmVyRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZU51bWJlcicpO1xuICAgICAgICB0aGlzLmZvcm0yRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzMTogYWRkcmVzczFFbGVtLnZhbHVlLFxuICAgICAgICAgICAgICAgIGFkZHJlc3MyOiBhZGRyZXNzMkVsZW0udmFsdWUsXG4gICAgICAgICAgICAgICAgYWRkcmVzczM6IGFkZHJlc3MzRWxlbS52YWx1ZSxcbiAgICAgICAgICAgICAgICBjaXR5OiBjaXR5RWxlbS52YWx1ZSxcbiAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGVFbGVtLnZhbHVlLFxuICAgICAgICAgICAgICAgIHppcENvZGU6IHppcENvZGVFbGVtLnZhbHVlLFxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOiBwaG9uZU51bWJlckVsZW0udmFsdWUsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybTJEYXRhKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Ym1pdHRlZEZvcm06IHRoaXMuc3RhdGUuc3VibWl0dGVkRm9ybSsxLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25Gb3JtM1N1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGNyZWRpdENhcmRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWRpdENhcmQnKTtcbiAgICAgICAgdmFyIGV4cGlyeURhdGVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cGlyeURhdGUnKTtcbiAgICAgICAgdmFyIGNjdkVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2N2Jyk7XG4gICAgICAgIHZhciBiaWxsaW5nWmlwQ29kZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlsbGluZ1ppcENvZGUnKTtcbiAgICAgICAgdGhpcy5mb3JtM0RhdGEgPSB7XG4gICAgICAgICAgICBjcmVkaXRDYXJkOiBjcmVkaXRDYXJkRWxlbS52YWx1ZSxcbiAgICAgICAgICAgIGV4cGlyeURhdGU6IGV4cGlyeURhdGVFbGVtLnZhbHVlLFxuICAgICAgICAgICAgY2N2OiBjY3ZFbGVtLnZhbHVlLFxuICAgICAgICAgICAgYmlsbGluZ1ppcENvZGU6IGJpbGxpbmdaaXBDb2RlRWxlbS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtM0RhdGEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Ym1pdHRlZEZvcm06IHRoaXMuc3RhdGUuc3VibWl0dGVkRm9ybSsxLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZm9ybVNlbmRIdHRwUmVxdWVzdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGFsbERhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZvcm0xRGF0YSwgdGhpcy5mb3JtMkRhdGEsIHRoaXMuZm9ybTNEYXRhKTtcbiAgICAgICAgdmFyIGVuZFBvaW50ID0gJy8nO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBlbmRQb2ludCxcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBkYXRhOiBhbGxEYXRhLFxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgY29tcDtcbiAgICAgICAgc3dpdGNoICh0aGlzLnN0YXRlLnN1Ym1pdHRlZEZvcm0pIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIGNvbXAgPSA8Rm9ybTEgXG4gICAgICAgICAgICAgICAgb25Gb3JtMVN1Ym1pdD17dGhpcy5vbkZvcm0xU3VibWl0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNvbXAgPSA8Rm9ybTIgXG4gICAgICAgICAgICAgICAgb25Gb3JtMlN1Ym1pdD17dGhpcy5vbkZvcm0yU3VibWl0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgLz4gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjb21wID0gPEZvcm0zIFxuICAgICAgICAgICAgICAgIG9uRm9ybTNTdWJtaXQ9e3RoaXMub25Gb3JtM1N1Ym1pdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+IDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgdmFyIGFsbERhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZvcm0xRGF0YSwgdGhpcy5mb3JtMkRhdGEsIHRoaXMuZm9ybTNEYXRhKTtcbiAgICAgICAgICAgIGNvbXAgPSA8U3VtbWFyeSBcbiAgICAgICAgICAgICAgICBhbGxEYXRhPXthbGxEYXRhfVxuICAgICAgICAgICAgICAgIGZvcm1TZW5kSHR0cFJlcXVlc3Q9e3RoaXMuZm9ybVNlbmRIdHRwUmVxdWVzdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+V2VsY29tZSB0byBSb2dlcidzIFN0b3JlITwvaDE+XG4gICAgICAgICAgICAgICAge2NvbXB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApXG4gICAgfVxufVxuXG4vL0YxIGNvbGxlY3RzIG5hbWUsIGVtYWlsLCBhbmQgcGFzc3dvcmQgZm9yIGFjY291bnQgY3JlYXRpb24uXG5cblxudmFyIEZvcm0xID0gKHtvbkZvcm0xU3VibWl0fSkgPT4gKFxuICAgIDxkaXYgaWQ9XCJmb3JtMVwiPlxuICAgICAgICA8aDI+U3RlcCAxOiBTaWduIFVwPC9oMj5cbiAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICBOYW1lOiA8YnI+PC9icj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiB0eXBlPVwidGV4dFwiLz48YnI+PC9icj5cbiAgICAgICAgICAgIEVtYWlsOiA8YnI+PC9icj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cInRleHRcIi8+PGJyPjwvYnI+XG4gICAgICAgICAgICBQYXNzd29yZDogPGJyPjwvYnI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCIvPjxicj48L2JyPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZvcm0xU3VibWl0XCIgb25DbGljaz17KGUpID0+IG9uRm9ybTFTdWJtaXQoZSl9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuKVxuXG4vL0YyIGNvbGxlY3RzIHNoaXAgdG8gYWRkcmVzcyAobGluZSAxLCBsaW5lIDIsIGNpdHksIHN0YXRlLCB6aXAgY29kZSkgYW5kIHBob25lIG51bWJlci5cblxuXG52YXIgRm9ybTIgPSAoe29uRm9ybTJTdWJtaXR9KSA9PiAoXG4gICAgPGRpdiBpZD1cImZvcm0yXCI+XG4gICAgPGgyPlN0ZXAgMjogRW50ZXIgU2hpcHBpbmcgQWRkcmVzczwvaDI+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgQWRkcmVzcyAobGluZTEpOiA8YnI+PC9icj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImFkZHJlc3MxXCIgdHlwZT1cInRleHRcIi8+IDxicj48L2JyPlxuICAgICAgICAgICAgQWRkcmVzcyAobGluZTIpOiA8YnI+PC9icj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImFkZHJlc3MyXCIgdHlwZT1cInRleHRcIi8+IDxicj48L2JyPlxuICAgICAgICAgICAgQWRkcmVzcyAobGluZTMpOiA8YnI+PC9icj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImFkZHJlc3MzXCIgdHlwZT1cInRleHRcIi8+IDxicj48L2JyPlxuICAgICAgICAgICAgQ2l0eTogPGJyPjwvYnI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIi8+IDxicj48L2JyPlxuICAgICAgICAgICAgU3RhdGU6IDxicj48L2JyPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwic3RhdGVcIiB0eXBlPVwidGV4dFwiLz4gPGJyPjwvYnI+XG4gICAgICAgICAgICBaaXAgQ29kZTogPGJyPjwvYnI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJ6aXBDb2RlXCIgdHlwZT1cInRleHRcIi8+IDxicj48L2JyPlxuICAgICAgICAgICAgUGhvbmUgTnVtYmVyOiA8YnI+PC9icj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInBob25lTnVtYmVyXCIgdHlwZT1cInRleHRcIi8+IDxicj48L2JyPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gb25Gb3JtMlN1Ym1pdChlKX0+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICA8L2Rpdj5cbilcblxuXG5cbi8vRjMgY29sbGVjdHMgY3JlZGl0IGNhcmQgIywgZXhwaXJ5IGRhdGUsIENWViwgYW5kIGJpbGxpbmcgemlwIGNvZGUuXG5cblxuXG52YXIgRm9ybTMgPSAoe29uRm9ybTNTdWJtaXR9KSA9PiAoXG4gICAgPGRpdiBpZD1cImZvcm0zXCI+XG4gICAgICAgIDxoMj5TdGVwIDM6IEVudGVyIFBheW1lbnQgSW5mb3JtYXRpb248L2gyPlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgIENyZWRpdCBDYXJkIzogPGJyPjwvYnI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjcmVkaXRDYXJkXCIgdHlwZT1cInRleHRcIi8+IDxicj48L2JyPlxuICAgICAgICAgICAgRXhwaXJ5IGRhdGU6IDxicj48L2JyPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZXhwaXJ5RGF0ZVwiIHR5cGU9XCJ0ZXh0XCIvPjxicj48L2JyPlxuICAgICAgICAgICAgQ1ZWOiA8YnI+PC9icj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNjdlwiIHR5cGU9XCJ0ZXh0XCIvPjxicj48L2JyPlxuICAgICAgICAgICAgQmlsbGluZyBaaXAgQ29kZTogPGJyPjwvYnI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJiaWxsaW5nWmlwQ29kZVwiIHR5cGU9XCJ0ZXh0XCIvPjxicj48L2JyPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gb25Gb3JtM1N1Ym1pdChlKX0gPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgXG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgXG4gICAgPC9kaXY+XG4pXG5cbnZhciBTdW1tYXJ5ID0gKHthbGxEYXRhLCBmb3JtU2VuZEh0dHBSZXF1ZXN0fSkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIE5hbWU6IHthbGxEYXRhLm5hbWV9PGJyPjwvYnI+XG4gICAgICAgIEVtYWlsOiB7YWxsRGF0YS5lbWFpbH08YnI+PC9icj5cbiAgICAgICAgUGFzc3dvcmQ6IHthbGxEYXRhLnBhc3N3b3JkfTxicj48L2JyPlxuICAgICAgICBBZGRyZXNzMToge2FsbERhdGEuYWRkcmVzczF9PGJyPjwvYnI+XG4gICAgICAgIEFkZHJlc3MyOiB7YWxsRGF0YS5hZGRyZXNzMn08YnI+PC9icj5cbiAgICAgICAgQWRkcmVzczM6IHthbGxEYXRhLmFkZHJlc3MzfTxicj48L2JyPlxuICAgICAgICBDaXR5OiB7YWxsRGF0YS5jaXR5fTxicj48L2JyPlxuICAgICAgICBTdGF0ZToge2FsbERhdGEuc3RhdGV9PGJyPjwvYnI+XG4gICAgICAgIFppcCBDb2RlOiB7YWxsRGF0YS56aXBDb2RlfTxicj48L2JyPlxuICAgICAgICBQaG9uZToge2FsbERhdGEucGhvbmVOdW1iZXJ9PGJyPjwvYnI+XG4gICAgICAgIENyZWRpdENhcmQ6IHthbGxEYXRhLmNyZWRpdENhcmR9PGJyPjwvYnI+XG4gICAgICAgIEV4cGlyeSBEYXRlOiB7YWxsRGF0YS5leHBpcnlEYXRlfTxicj48L2JyPiBcbiAgICAgICAgQ0NWOiB7YWxsRGF0YS5jY3Z9PGJyPjwvYnI+XG4gICAgICAgIEJpbGxpbmcgWmlwIENvZGU6IHthbGxEYXRhLmJpbGxpbmdaaXBDb2RlfTxicj48L2JyPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBmb3JtU2VuZEh0dHBSZXF1ZXN0KGUpfT5QdXJjaGFzZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0=