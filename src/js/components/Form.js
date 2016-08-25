import React from 'react';
import { Button, Input, Dropdown, Form } from 'stardust'
import { WITHDRAWAL, DEPOSIT } from '../constants/transactionTypes';
import { AMOUNT_FIELD, TRANSACTION_TYPE_FIELD } from '../constants';
import { isInvalidAmount, normalizeAmount } from '../reducers/transactions';
import ProgressMessage from './ProgressMessage';

const TRANSACTION_OPTIONS = [
    { value: WITHDRAWAL, text: 'Withdraw' },
    { value: DEPOSIT, text: 'Deposit' }
];

const TransactionForm = React.createClass({

    onSubmit(event) {
        if (this.props.progress.loading) return false;

        const { form: { transactionType, amount } } = this.props;
        this.props.submitTransaction(
            transactionType, amount
        );
    },

    onAmountChange(event) {
        this.props.setFormField(
            AMOUNT_FIELD, event.target.value
        );
    },

    onSelectChange(event, value) {
        this.props.setFormField(
            TRANSACTION_TYPE_FIELD, value
        );
    },

    renderProgressMessage() {
        const { hideProgressMessage, progress } = this.props;
        return <ProgressMessage progress={progress}
            hideProgressMessage={hideProgressMessage} />;
    },

    render() {
        const {
            form, setFormField,
            progress: { loading, visible }
        } = this.props;
        const amount = form[AMOUNT_FIELD];
        const transactionType = form[TRANSACTION_TYPE_FIELD];
        const invalid = amount && isInvalidAmount(amount);
        const disabled = !loading && (invalid || !amount);
        const inputClass = 'left icon action' + (invalid ? ' error' : '');
        const buttonClass = 'green' + (loading ? ' loading' : '');

        return (<div className="content-block transaction-form">
            <Form>
                <Input icon='dollar' placeholder='Amount' className={inputClass}
                    onChange={this.onAmountChange} value={amount}>
                    <Dropdown selection compact onChange={this.onSelectChange}
                        options={TRANSACTION_OPTIONS} value={transactionType} />
                    <Button type='submit' disabled={disabled}
                        className={buttonClass} onClick={this.onSubmit}>
                        Go
                    </Button>
                </Input>
            </Form>
            <div className="progress-message-wrapper">
                { visible && this.renderProgressMessage() }
            </div>
        </div>);

    }
});

export default TransactionForm;
