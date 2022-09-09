import {useState} from 'react'
import {moneyFormat} from '../helpers';

function Header({total, money}) {
	return (
		<>
			{total > 0 && money - total !== 0 && (
				<div className="header">Harcayacak <span>₺ {moneyFormat(money - total)}</span> kaldı...</div>
			)}
			{total === 0 && (
				<div className="header">Laptop Almak İçin <span>₺ {moneyFormat(money)}</span> Paranız Var!</div>
			)}
			{money - total === 0 && (
				<div className="header empty">Paranız kalmadı..</div>
			)}
			<style jsx>{`
              .header {
                position: sticky;
                top: 0;
                background: linear-gradient(to bottom, #645A84, #845A6A);
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 30px;
                letter-spacing: 1px;
              }

              .header.empty {
                background: linear-gradient(to bottom, #b82020, #be1414);
              }

              .header span {
                margin: 0 10px;
                font-weight: bold;
              }
			`}</style>
		</>
	)
}

export default Header