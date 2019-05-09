
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

    onCheckoutSubmit(e) {
        e.preventDefault();
        this.setState({
            submittedForm: this.state.submittedForm + 1
        });
    }

    onForm1Submit(e) {
        e.preventDefault();
        var data = $("#firstForm").val();
        console.log(data);
        $('#firstForm').each(e => {
            console.log($(this));
        });
        var nameElem = document.getElementById('name');
        var emailElem = document.getElementById('email');
        var passwordElem = document.getElementById('password');
        this.form1Data = {
            name: nameElem.value,
            email: emailElem.value,
            password: passwordElem.value
        };
        // console.log(this.form1Data)
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
        // console.log(this.form2Data)
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
        // console.log(this.form3Data);
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
                this.setState({
                    submittedForm: 0
                });
            },
            error: () => {
                console.log('Error');
            }
        });
    }

    render() {
        let comp;
        switch (this.state.submittedForm) {
            case 0:
                comp = React.createElement(Checkout, {
                    onCheckoutSubmit: this.onCheckoutSubmit.bind(this)
                });
                break;
            case 1:
                comp = React.createElement(Form1, {
                    onForm1Submit: this.onForm1Submit.bind(this)
                });
                break;
            case 2:
                comp = React.createElement(Form2, {
                    onForm2Submit: this.onForm2Submit.bind(this)
                });
                break;
            case 3:
                comp = React.createElement(Form3, {
                    onForm3Submit: this.onForm3Submit.bind(this)
                });
                break;
            case 4:
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

var Checkout = ({ onCheckoutSubmit }) => React.createElement(
    'button',
    { onClick: e => onCheckoutSubmit(e) },
    'Checkout'
);

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
        { id: 'firstForm', action: '' },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9hcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJmb3JtMURhdGEiLCJmb3JtMkRhdGEiLCJmb3JtM0RhdGEiLCJzdGF0ZSIsInN1Ym1pdHRlZEZvcm0iLCJvbkNoZWNrb3V0U3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJvbkZvcm0xU3VibWl0IiwiZGF0YSIsIiQiLCJ2YWwiLCJjb25zb2xlIiwibG9nIiwiZWFjaCIsIm5hbWVFbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImVtYWlsRWxlbSIsInBhc3N3b3JkRWxlbSIsIm5hbWUiLCJ2YWx1ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJvbkZvcm0yU3VibWl0IiwiYWRkcmVzczFFbGVtIiwiYWRkcmVzczJFbGVtIiwiYWRkcmVzczNFbGVtIiwiY2l0eUVsZW0iLCJzdGF0ZUVsZW0iLCJ6aXBDb2RlRWxlbSIsInBob25lTnVtYmVyRWxlbSIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJhZGRyZXNzMyIsImNpdHkiLCJ6aXBDb2RlIiwicGhvbmVOdW1iZXIiLCJvbkZvcm0zU3VibWl0IiwiY3JlZGl0Q2FyZEVsZW0iLCJleHBpcnlEYXRlRWxlbSIsImNjdkVsZW0iLCJiaWxsaW5nWmlwQ29kZUVsZW0iLCJjcmVkaXRDYXJkIiwiZXhwaXJ5RGF0ZSIsImNjdiIsImJpbGxpbmdaaXBDb2RlIiwiZm9ybVNlbmRIdHRwUmVxdWVzdCIsImFsbERhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJlbmRQb2ludCIsImFqYXgiLCJ1cmwiLCJtZXRob2QiLCJzdWNjZXNzIiwicmVzdWx0IiwiZXJyb3IiLCJyZW5kZXIiLCJjb21wIiwiYmluZCIsIkNoZWNrb3V0IiwiRm9ybTEiLCJGb3JtMiIsIkZvcm0zIiwiU3VtbWFyeSJdLCJtYXBwaW5ncyI6IjtBQUNBLE1BQU1BLEdBQU4sU0FBa0JDLE1BQU1DLFNBQXhC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QVVZWSxZQUFRWCxXQVZwQjtBQVVnQyxtQ0FWaEM7QUFBQTtBQVdpQlcsWUFBUUwsVUFYekI7QUFXb0MsbUNBWHBDO0FBQUE7QUFZa0JLLFlBQVFKLFVBWjFCO0FBWXFDLG1DQVpyQztBQUFBO0FBYVVJLFlBQVFILEdBYmxCO0FBYXNCLG1DQWJ0QjtBQUFBO0FBY3VCRyxZQUFRRixjQWQvQjtBQWM4QyxtQ0FkOUM7QUFlSTtBQUFBO0FBQUEsVUFBUSxTQUFVekMsQ0FBRCxJQUFPMEMsb0JBQW9CMUMsQ0FBcEIsQ0FBeEI7QUFBQTtBQUFBO0FBZkosQ0FESjs7QUFvQkEsZUFBZVYsR0FBZiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5mb3JtMURhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5mb3JtMkRhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5mb3JtM0RhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHN1Ym1pdHRlZEZvcm06IDAsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoZWNrb3V0U3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Ym1pdHRlZEZvcm06IHRoaXMuc3RhdGUuc3VibWl0dGVkRm9ybSsxLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkZvcm0xU3VibWl0KGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgZGF0YSA9ICQoXCIjZmlyc3RGb3JtXCIpLnZhbCgpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAkKCcjZmlyc3RGb3JtJykuZWFjaCgoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJCh0aGlzKSlcbiAgICAgICAgfSlcbiAgICAgICAgdmFyIG5hbWVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKTtcbiAgICAgICAgdmFyIGVtYWlsRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlbWFpbCcpO1xuICAgICAgICB2YXIgcGFzc3dvcmRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyk7XG4gICAgICAgIHRoaXMuZm9ybTFEYXRhID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZUVsZW0udmFsdWUsXG4gICAgICAgICAgICBlbWFpbDogZW1haWxFbGVtLnZhbHVlLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkRWxlbS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtMURhdGEpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VibWl0dGVkRm9ybTogdGhpcy5zdGF0ZS5zdWJtaXR0ZWRGb3JtKzEsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRm9ybTJTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBhZGRyZXNzMUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkcmVzczEnKTtcbiAgICAgICAgdmFyIGFkZHJlc3MyRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRyZXNzMicpO1xuICAgICAgICB2YXIgYWRkcmVzczNFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZHJlc3MzJyk7XG4gICAgICAgIHZhciBjaXR5RWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaXR5Jyk7XG4gICAgICAgIHZhciBzdGF0ZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhdGUnKTtcbiAgICAgICAgdmFyIHppcENvZGVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ppcENvZGUnKTtcbiAgICAgICAgdmFyIHBob25lTnVtYmVyRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaG9uZU51bWJlcicpO1xuICAgICAgICB0aGlzLmZvcm0yRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzMTogYWRkcmVzczFFbGVtLnZhbHVlLFxuICAgICAgICAgICAgICAgIGFkZHJlc3MyOiBhZGRyZXNzMkVsZW0udmFsdWUsXG4gICAgICAgICAgICAgICAgYWRkcmVzczM6IGFkZHJlc3MzRWxlbS52YWx1ZSxcbiAgICAgICAgICAgICAgICBjaXR5OiBjaXR5RWxlbS52YWx1ZSxcbiAgICAgICAgICAgICAgICBzdGF0ZTogc3RhdGVFbGVtLnZhbHVlLFxuICAgICAgICAgICAgICAgIHppcENvZGU6IHppcENvZGVFbGVtLnZhbHVlLFxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOiBwaG9uZU51bWJlckVsZW0udmFsdWUsXG4gICAgICAgIH07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybTJEYXRhKVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Ym1pdHRlZEZvcm06IHRoaXMuc3RhdGUuc3VibWl0dGVkRm9ybSsxLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgb25Gb3JtM1N1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGNyZWRpdENhcmRFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWRpdENhcmQnKTtcbiAgICAgICAgdmFyIGV4cGlyeURhdGVFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V4cGlyeURhdGUnKTtcbiAgICAgICAgdmFyIGNjdkVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2N2Jyk7XG4gICAgICAgIHZhciBiaWxsaW5nWmlwQ29kZUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmlsbGluZ1ppcENvZGUnKTtcbiAgICAgICAgdGhpcy5mb3JtM0RhdGEgPSB7XG4gICAgICAgICAgICBjcmVkaXRDYXJkOiBjcmVkaXRDYXJkRWxlbS52YWx1ZSxcbiAgICAgICAgICAgIGV4cGlyeURhdGU6IGV4cGlyeURhdGVFbGVtLnZhbHVlLFxuICAgICAgICAgICAgY2N2OiBjY3ZFbGVtLnZhbHVlLFxuICAgICAgICAgICAgYmlsbGluZ1ppcENvZGU6IGJpbGxpbmdaaXBDb2RlRWxlbS52YWx1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtM0RhdGEpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHN1Ym1pdHRlZEZvcm06IHRoaXMuc3RhdGUuc3VibWl0dGVkRm9ybSsxLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZm9ybVNlbmRIdHRwUmVxdWVzdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIGFsbERhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZvcm0xRGF0YSwgdGhpcy5mb3JtMkRhdGEsIHRoaXMuZm9ybTNEYXRhKTtcbiAgICAgICAgdmFyIGVuZFBvaW50ID0gJy8nO1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBlbmRQb2ludCxcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBkYXRhOiBhbGxEYXRhLFxuICAgICAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdHRlZEZvcm06IDAsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGNvbXA7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5zdWJtaXR0ZWRGb3JtKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBjb21wID0gPENoZWNrb3V0IFxuICAgICAgICAgICAgb25DaGVja291dFN1Ym1pdD17dGhpcy5vbkNoZWNrb3V0U3VibWl0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGNvbXAgPSA8Rm9ybTEgXG4gICAgICAgICAgICAgICAgb25Gb3JtMVN1Ym1pdD17dGhpcy5vbkZvcm0xU3VibWl0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGNvbXAgPSA8Rm9ybTIgXG4gICAgICAgICAgICAgICAgb25Gb3JtMlN1Ym1pdD17dGhpcy5vbkZvcm0yU3VibWl0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgLz4gO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjb21wID0gPEZvcm0zIFxuICAgICAgICAgICAgICAgIG9uRm9ybTNTdWJtaXQ9e3RoaXMub25Gb3JtM1N1Ym1pdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+IDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgdmFyIGFsbERhdGEgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmZvcm0xRGF0YSwgdGhpcy5mb3JtMkRhdGEsIHRoaXMuZm9ybTNEYXRhKTtcbiAgICAgICAgICAgIGNvbXAgPSA8U3VtbWFyeSBcbiAgICAgICAgICAgICAgICBhbGxEYXRhPXthbGxEYXRhfVxuICAgICAgICAgICAgICAgIGZvcm1TZW5kSHR0cFJlcXVlc3Q9e3RoaXMuZm9ybVNlbmRIdHRwUmVxdWVzdC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIC8+O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+V2VsY29tZSB0byBSb2dlcidzIFN0b3JlITwvaDE+XG4gICAgICAgICAgICAgICAge2NvbXB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICApXG4gICAgfVxufVxuXG5cbnZhciBDaGVja291dCA9ICh7b25DaGVja291dFN1Ym1pdH0pID0+IChcbiAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBvbkNoZWNrb3V0U3VibWl0KGUpfT5DaGVja291dDwvYnV0dG9uPlxuKVxuXG5cblxuXG5cblxuLy9GMSBjb2xsZWN0cyBuYW1lLCBlbWFpbCwgYW5kIHBhc3N3b3JkIGZvciBhY2NvdW50IGNyZWF0aW9uLlxuXG5cbnZhciBGb3JtMSA9ICh7b25Gb3JtMVN1Ym1pdH0pID0+IChcbiAgICA8ZGl2IGlkPVwiZm9ybTFcIj5cbiAgICAgICAgPGgyPlN0ZXAgMTogU2lnbiBVcDwvaDI+XG4gICAgICAgIDxmb3JtIGlkPVwiZmlyc3RGb3JtXCIgYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICBOYW1lOiA8YnI+PC9icj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiB0eXBlPVwidGV4dFwiLz48YnI+PC9icj5cbiAgICAgICAgICAgIEVtYWlsOiA8YnI+PC9icj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImVtYWlsXCIgdHlwZT1cInRleHRcIi8+PGJyPjwvYnI+XG4gICAgICAgICAgICBQYXNzd29yZDogPGJyPjwvYnI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJwYXNzd29yZFwiIHR5cGU9XCJ0ZXh0XCIvPjxicj48L2JyPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImZvcm0xU3VibWl0XCIgb25DbGljaz17KGUpID0+IG9uRm9ybTFTdWJtaXQoZSl9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuKVxuXG4vL0YyIGNvbGxlY3RzIHNoaXAgdG8gYWRkcmVzcyAobGluZSAxLCBsaW5lIDIsIGNpdHksIHN0YXRlLCB6aXAgY29kZSkgYW5kIHBob25lIG51bWJlci5cblxuXG52YXIgRm9ybTIgPSAoe29uRm9ybTJTdWJtaXR9KSA9PiAoXG4gICAgPGRpdiBpZD1cImZvcm0yXCI+XG4gICAgPGgyPlN0ZXAgMjogRW50ZXIgU2hpcHBpbmcgQWRkcmVzczwvaDI+XG4gICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgQWRkcmVzcyAobGluZTEpOiA8YnI+PC9icj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImFkZHJlc3MxXCIgdHlwZT1cInRleHRcIi8+IDxicj48L2JyPlxuICAgICAgICAgICAgQWRkcmVzcyAobGluZTIpOiA8YnI+PC9icj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImFkZHJlc3MyXCIgdHlwZT1cInRleHRcIi8+IDxicj48L2JyPlxuICAgICAgICAgICAgQWRkcmVzcyAobGluZTMpOiA8YnI+PC9icj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImFkZHJlc3MzXCIgdHlwZT1cInRleHRcIi8+IDxicj48L2JyPlxuICAgICAgICAgICAgQ2l0eTogPGJyPjwvYnI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjaXR5XCIgdHlwZT1cInRleHRcIi8+IDxicj48L2JyPlxuICAgICAgICAgICAgU3RhdGU6IDxicj48L2JyPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwic3RhdGVcIiB0eXBlPVwidGV4dFwiLz4gPGJyPjwvYnI+XG4gICAgICAgICAgICBaaXAgQ29kZTogPGJyPjwvYnI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJ6aXBDb2RlXCIgdHlwZT1cInRleHRcIi8+IDxicj48L2JyPlxuICAgICAgICAgICAgUGhvbmUgTnVtYmVyOiA8YnI+PC9icj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cInBob25lTnVtYmVyXCIgdHlwZT1cInRleHRcIi8+IDxicj48L2JyPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gb25Gb3JtMlN1Ym1pdChlKX0+TmV4dDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICA8L2Rpdj5cbilcblxuXG5cbi8vRjMgY29sbGVjdHMgY3JlZGl0IGNhcmQgIywgZXhwaXJ5IGRhdGUsIENWViwgYW5kIGJpbGxpbmcgemlwIGNvZGUuXG5cblxuXG52YXIgRm9ybTMgPSAoe29uRm9ybTNTdWJtaXR9KSA9PiAoXG4gICAgPGRpdiBpZD1cImZvcm0zXCI+XG4gICAgICAgIDxoMj5TdGVwIDM6IEVudGVyIFBheW1lbnQgSW5mb3JtYXRpb248L2gyPlxuICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgIENyZWRpdCBDYXJkIzogPGJyPjwvYnI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJjcmVkaXRDYXJkXCIgdHlwZT1cInRleHRcIi8+IDxicj48L2JyPlxuICAgICAgICAgICAgRXhwaXJ5IGRhdGU6IDxicj48L2JyPlxuICAgICAgICAgICAgPGlucHV0IGlkPVwiZXhwaXJ5RGF0ZVwiIHR5cGU9XCJ0ZXh0XCIvPjxicj48L2JyPlxuICAgICAgICAgICAgQ1ZWOiA8YnI+PC9icj5cbiAgICAgICAgICAgIDxpbnB1dCBpZD1cImNjdlwiIHR5cGU9XCJ0ZXh0XCIvPjxicj48L2JyPlxuICAgICAgICAgICAgQmlsbGluZyBaaXAgQ29kZTogPGJyPjwvYnI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJiaWxsaW5nWmlwQ29kZVwiIHR5cGU9XCJ0ZXh0XCIvPjxicj48L2JyPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoZSkgPT4gb25Gb3JtM1N1Ym1pdChlKX0gPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgXG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgXG4gICAgPC9kaXY+XG4pXG5cbnZhciBTdW1tYXJ5ID0gKHthbGxEYXRhLCBmb3JtU2VuZEh0dHBSZXF1ZXN0fSkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIE5hbWU6IHthbGxEYXRhLm5hbWV9PGJyPjwvYnI+XG4gICAgICAgIEVtYWlsOiB7YWxsRGF0YS5lbWFpbH08YnI+PC9icj5cbiAgICAgICAgUGFzc3dvcmQ6IHthbGxEYXRhLnBhc3N3b3JkfTxicj48L2JyPlxuICAgICAgICBBZGRyZXNzMToge2FsbERhdGEuYWRkcmVzczF9PGJyPjwvYnI+XG4gICAgICAgIEFkZHJlc3MyOiB7YWxsRGF0YS5hZGRyZXNzMn08YnI+PC9icj5cbiAgICAgICAgQWRkcmVzczM6IHthbGxEYXRhLmFkZHJlc3MzfTxicj48L2JyPlxuICAgICAgICBDaXR5OiB7YWxsRGF0YS5jaXR5fTxicj48L2JyPlxuICAgICAgICBTdGF0ZToge2FsbERhdGEuc3RhdGV9PGJyPjwvYnI+XG4gICAgICAgIFppcCBDb2RlOiB7YWxsRGF0YS56aXBDb2RlfTxicj48L2JyPlxuICAgICAgICBQaG9uZToge2FsbERhdGEucGhvbmVOdW1iZXJ9PGJyPjwvYnI+XG4gICAgICAgIENyZWRpdENhcmQ6IHthbGxEYXRhLmNyZWRpdENhcmR9PGJyPjwvYnI+XG4gICAgICAgIEV4cGlyeSBEYXRlOiB7YWxsRGF0YS5leHBpcnlEYXRlfTxicj48L2JyPiBcbiAgICAgICAgQ0NWOiB7YWxsRGF0YS5jY3Z9PGJyPjwvYnI+XG4gICAgICAgIEJpbGxpbmcgWmlwIENvZGU6IHthbGxEYXRhLmJpbGxpbmdaaXBDb2RlfTxicj48L2JyPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBmb3JtU2VuZEh0dHBSZXF1ZXN0KGUpfT5QdXJjaGFzZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXX0=