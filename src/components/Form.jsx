import { useState } from 'react';
import Input from './Input';
import formData from '../data/formData';
import formDataMonthly from '../data/formDataMonthly';
import formDataYearly from '../data/formDataYearly';

function Form({ inputClasses, isClicked }) {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [secondPageValue, setSecondPageValue] = useState(9);
  const [yearlyList, setyearlyList] = useState(true);
  const totalResultForm = [
    { name: name, email: email, phoneNumber: phone },
    { subscription: secondPageValue },
  ];
  console.log(totalResultForm);

  function checkedClick() {
    setyearlyList(!yearlyList);
  }
  function monthlyPage() {
    return formDataMonthly.map((item) => {
      return (
        <div key={item.value}>
          <Input
            checked={item.value === secondPageValue}
            labelSpan={item.labelSpan}
            spanClass={item.spanClass}
            labelName={item.labelName}
            labelClass={item.labelClass}
            nameInput={item.labelName}
            typeInput={item.typeInput}
            inputId={item.id}
            inputValue={item.value}
            onChange={(e) => setSecondPageValue(+e.target.value)}
          />
        </div>
      );
    });
  }
  function yearlyPage() {
    return formDataYearly.map((item) => {
      return (
        <div key={item.value}>
          <Input
            checked={item.value === secondPageValue}
            labelSpan={item.labelSpan}
            yearlySpan={item.yearlySpan}
            spanClass={item.spanClass}
            spanYearleClass={item.spanYearleClass}
            labelName={item.labelName}
            labelClass={item.labelClass}
            nameInput={item.labelName}
            typeInput={item.typeInput}
            inputId={item.id}
            inputValue={item.value}
            onChange={(e) => setSecondPageValue(+e.target.value)}
          />
        </div>
      );
    });
  }
  function pages(isClicked) {
    if (isClicked === 0) {
      return formData.map((e) => {
        return (
          <Input
            labelClass={e.labelClass}
            labelName={e.labelName}
            typeInput={e.typeInput}
            value={''}
            placeholderInput={e.placeholderInput}
            required
            key={e.placeholderInput}
            onChange={(event) => {
              if (e.labelName === 'Name') {
                setName(event.target.value);
              } else if (e.labelName === 'Address') {
                setEmail(event.target.value);
              } else if (e.labelName === 'Phone Number') {
                setPhone(event.target.value);
              }
            }}
            inputWrongClass={(event) => event.target.value.length > 0 ? '' : 'inputEmpty'}
            />
            );
          });
    } else if (isClicked === 1) {
      return (
        <div className="flex-col">
          <div className="flex gap-[18px] mb-[32px]">
            {yearlyList ? monthlyPage() : yearlyPage()}
          </div>
          <div className="flex gap-[24px] justify-center items-center w-[450px] h-[48px] rounded-[8px] bg-[#F8F9FF]">
            <span className={yearlyList ? 'switchModeActive' : 'switchMode'}>
              Monthly
            </span>
            <label className="switch">
              <input
                className="opacity-[0] absolute"
                type="checkbox"
                onChange={checkedClick}
                checked={!yearlyList ? true : false}
              />
            </label>
            <span className={!yearlyList ? 'switchModeActive' : 'switchMode'}>
              Yearly
            </span>
          </div>
        </div>
      );
    }
  }
  return (
    <form onSubmit={onSubmit} className={inputClasses} action="#">
      {pages(isClicked)}
    </form>
  );
}

export default Form;
