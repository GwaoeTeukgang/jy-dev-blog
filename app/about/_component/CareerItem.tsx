import React from 'react';

export default function CareerItem({
  companyName,
  firstWorkDay,
  inOffice,
  endWorkDay,
  description,
}: CareerInfo) {
  return (
    <>
      <div className={'w-1/3 max-sm:w-full max-sm:mb-4'}>
        <h3 className={'font-bold text-2xl'}>{companyName}</h3>
        <p className={'text-gray-500'}>
          {firstWorkDay} ~ {inOffice ? '재직중' : endWorkDay}
        </p>
      </div>
      <div>
        {description.split('\n').map((it, idx) => (
          <p key={`${companyName}-${idx}`} className={'flex-1 text-light'}>
            {it}
          </p>
        ))}
      </div>
    </>
  );
}
