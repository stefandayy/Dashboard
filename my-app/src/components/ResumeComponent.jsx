import React from 'react'
import {Container} from 'react-bootstrap'
import { AiOutlinePieChart, AiOutlineWallet } from "react-icons/ai";
import { BsPersonWorkspace } from "react-icons/bs";
import { GiPayMoney } from "react-icons/gi";
import NewClientCard from './NewClientCard';
const ResumeComponent = ({data}) => {
  return (
    <Container>
        <h1 className='py-5'>Good morning, {data.user1.name}!</h1>

        <div className="py-2">
          <h2>
            <AiOutlineWallet /> <span className="px-4">${data.user1.balance}</span>
          </h2>
          <p className="mx-5 px-3">Your Bank Balance</p>
        </div>

        <div className="py-1">
          <h2>
            <AiOutlinePieChart /> <span className="px-4">{data.user1.unTransaction}</span>
          </h2>
          <p className="mx-5 px-3">
            Uncaterigozed <br />
            transactions
          </p>
        </div>

        <div className="py-1">
          <h2>
            <BsPersonWorkspace /> <span className="px-4">{data.user1.empWork}</span>
          </h2>
          <p className="mx-5 px-3">
            Employees <br />
            working today
          </p>
        </div>

        <div className="py-1">
          <h2>
            <GiPayMoney /> <span className="px-4">${data.user1.spending}</span>
          </h2>
          <p className=" mx-5 px-3">
            This week's <br />
            card spending
          </p>
        </div>
        <NewClientCard data={data} />
    </Container>
  )
}

export default ResumeComponent