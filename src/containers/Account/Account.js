//styles
import styles from './Account.module.css';
//components
import FormContainer from '../../components/FormContainer/FormContainer';
import FormInput from '../../components/FormInput/FormInput';

const Account = ({ accountInfo, onInputChange }) => {
  const { customerId, customerEmail, customerName } = accountInfo;

  return (
    <div className={styles.accountContainer}>
      <FormContainer title='Account Information'>
        <FormInput
          label='Customer Id'
          type='text'
          name='customerId'
          required={true}
          value={customerId}
          onChange={onInputChange}
        />
        <FormInput
          label='Email'
          type='email'
          name='customerEmail'
          required={true}
          value={customerEmail}
          onChange={onInputChange}
        />
        <FormInput
          label='Name'
          type='text'
          name='customerName'
          required={true}
          value={customerName}
          onChange={onInputChange}
        />
      </FormContainer>
    </div>
  );
};

export default Account;
