import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from "react-i18next";
import { forwardRef } from 'react';

const useValidationSchema = () => {
  const { t } = useTranslation();

  return yup.object().shape({
    name: yup.string().required(t('form.validation.label')),
    email: yup.string().email(t('form.validation.email')).required(t('form.validation.emailRequired')),
    message: yup.string().min(10, t('form.validation.messageMin')).required(t('form.validation.messageRequired')),
  });
};

export const ContactUsToday = forwardRef(({ onSubmit, isSubmitting }, ref) => {
  const { t } = useTranslation();
  const schema = useValidationSchema();
  const {register,handleSubmit,reset,formState: { errors },} = useForm({
    resolver: yupResolver(schema),
  });

  const handleSubmitAndReset = async (data) => {
    try {
      await onSubmit(data, reset);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="section" ref={ref}>
      <div className="container">
        <div className="textContactUs">
        <h2>{t('contactUs.title')}</h2>
          <p>{t('contactUs.description')}</p>
        </div>


        <div className="form">
          <form onSubmit={handleSubmit(handleSubmitAndReset)} noValidate>
            <div className='firstRow'>
              <div className={`row ${errors.name ? 'error' : ''}`}>
                <label htmlFor="name">{t('form.name.label')}</label>
                <input
                  type="text"
                  name="name"
                  placeholder= {t('form.name.placeholder')}
                  {...register("name")}
                />
                {errors.name && <p className="error">{errors.name.message}</p>}
              </div>

              <div className={`row ${errors.email ? 'error' : ''}`}>
                <label htmlFor="email">{t('form.email.label')}</label>
                <input
                  type="email"
                  name="email"
                  placeholder={t('form.email.placeholder')}
                  {...register("email")}
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
              </div>
            </div>
            <div className={`rowText ${errors.message ? 'error' : ''}`}>
              <label htmlFor="message">{t('form.message.label')}</label>
              <textarea
                className='fixedWidthTextarea'
                cols="50" rows="10"
                name="message"
                placeholder={t('form.message.placeholder')}
                {...register("message")}
              />
              {errors.message && <p className="error">{errors.message.message}</p>}
            </div>

            <button className="formBtn" type="submit" disabled={isSubmitting}>
              {isSubmitting ? t('form.submitting') : t('form.btn')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default ContactUsToday;