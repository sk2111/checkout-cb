//styles
import styles from './ShippingInfo.module.css';
//components
import FormContainer from 'components/FormContainer/FormContainer';
import FormInput from 'components/FormInput/FormInput';

const ShippingInfo = ({ shippingInfo, onInputChange }) => {
  const { mobileNumber, address, city, country } = shippingInfo;

  return (
    <div className={styles.shippingContainer}>
      <FormContainer title='Shipping Information'>
        <FormInput
          label='Mobile Number'
          type='number'
          name='mobileNumber'
          required={true}
          value={mobileNumber}
          onChange={onInputChange}
        />
        <FormInput
          label='Address'
          type='text'
          name='address'
          required={true}
          value={address}
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
