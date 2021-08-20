//styles
import styles from './PaymentInfo.module.css';
//components
import FormContainer from 'components/FormContainer/FormContainer';
import FormInput from 'components/FormInput/FormInput';

const PaymentInfo = ({ paymentInfo, onInputChange }) => {
  const { card, expiry, cvv } = paymentInfo;

  return (
    <div className={styles.paymentContainer}>
      <FormContainer title='Payment Information'>
        <FormInput
          label='Card'
          type='number'
          name='card'
          required={true}
          value={card}
          onChange={onInputChange}
        />
        <FormInput
          label='Expiry'
          type='date'
          name='expiry'
          required={true}
          value={expiry}
          onChange={onInputChange}
        />
        <FormInput
          label='CVV'
          type='number'
          name='cvv'
          required={true}
          value={cvv}
          onChange={onInputChange}
        />
      </FormContainer>
    </div>
  );
};

export default PaymentInfo;
