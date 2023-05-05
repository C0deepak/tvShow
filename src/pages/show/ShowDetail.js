import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ShowDetail.css'
import { AiOutlineUser, AiOutlineMail, AiTwotoneCalendar,AiOutlineCloseCircle } from 'react-icons/ai'
import { FaRupeeSign } from 'react-icons/fa'

const ShowDetail = (props) => {
    const { id } = useParams()
    const [showDetail, setShowDetail] = useState([])
    const [modal, setModal] = useState(false)

    function toggleModal() {
        setModal(!modal)
        console.log(modal)
    }

    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then((response) => response.json())
            .then((data) => setShowDetail(data))
    }, [id])

    const summary = showDetail.summary ? showDetail.summary.replace(/<[^>]*>/g, '') : ''
    return (
        <>
            <div className="showDetail">
                <img src={showDetail.image ? showDetail.image.original : ''} alt="" className='showImg' />
                <div className="right">
                    <div className="mdHeading">{showDetail.name}</div>
                    <div className="mdSummary">{summary}</div>
                    <div className="mdGenre">
                        {showDetail.genres ?
                            showDetail.genres.map((gen) => {
                                return (
                                    <div className="mdgCard">{gen}</div>
                                )
                            }) : ''
                        }
                    </div>
                    <div className="mdBook" onClick={toggleModal}>Book Ticket</div>
                </div>
            </div>

            {modal ? <div className="showModal">
                <div className="showModalBox">
                    <div className="closeBtn" onClick={toggleModal}><AiOutlineCloseCircle/></div>
                    <div className="mdHeading">{showDetail.name}</div>
                    <div className="mdSummary sumForm">{summary}</div>

                    <form>
                        <div className="inputField">
                            <AiOutlineUser/><input type="text" placeholder='Name...' />
                        </div>
                        <div className="inputField">
                            <AiOutlineMail/><input type="email" placeholder='Email...' />
                        </div>
                        <div className="inputField">
                            <AiTwotoneCalendar/><input type="date" placeholder='Date' />
                        </div>
                        <div className="extraField">
                            <div className="efHeading">prefferable TimeSlot:</div>
                            <div className="mdGenre">
                                <div className="mdgTime">9:30 a.m</div>
                                <div className="mdgTime">11:00 a.m</div>
                                <div className="mdgTime">2:30 a.m</div>
                                <div className="mdgTime">5:15 a.m</div>
                                <div className="mdgTime">7:45 a.m</div>
                            </div>
                        </div>
                        <div className="AmountField">
                            <div className="efHeading">Net Payable :</div>
                            <div className="totalAmount"><FaRupeeSign /> 220</div>
                        </div>
                        <div className="modalPay">Proceed to payment</div>
                    </form>
                </div>
            </div> : ''}
        </>
    )
}

export default ShowDetail