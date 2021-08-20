//styles
import styles from './ShippingInfo.module.css';
//components
import FormContainer from 'components/FormContainer/FormContainer';
import FormInput from 'components/FormInput/FormInput';

const ShippingInfo = ({ shippingInfo, onInputChange }) => {
  const { mobile, street, state, city, country } = shippingInfo;

  return (
    <div className={styles.shippingContainer}>
      <FormContainer title='Shipping Information'>
        <FormInput
          label='Mobile Number'
          type='number'
          name='mobile'
          required={true}
          value={mobile}
          onChange={onInputChange}
        />
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

export default ShippingInfo;
