//styles
import styles from './BillingInfo.module.css';
//components
import FormContainer from '../../components/FormContainer/FormContainer';
import FormInput from '../../components/FormInput/FormInput';

const BillingInfo = ({ billingInfo, onInputChange }) => {
  const { street, state, city, country } = billingInfo;
  return (
    <div className={styles.billingContainer}>
      <FormContainer title='Billing Information'>
        <FormInput
          label='Street'
          type='text'
          name='street'
          required={true}
          value={street}
          onChange={onInputChange}
        />
        <FormInput
          label='State'
          type='text'
          name='state'
          required={true}
          value={state}
          onChange={onInputChange}
        />
        <FormInput
          label='City'
          type='text'
          name='city'
          required={true}
          value={city}
          onChange={onInputChange}
        />
        <FormInput
          label='Country'
          type='text'
          name='country'
          required={true}
          value={country}
          onChange={onInputChange}
        />
      </FormContainer>
    </div>
  );
};

export default BillingInfo;
