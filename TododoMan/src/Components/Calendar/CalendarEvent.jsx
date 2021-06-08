import React from 'react';

import { connect } from 'react-redux'
import "react-big-calendar/lib/css/react-big-calendar.css";
import './Calendar.css'
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Button from '../Button/Button';
import ModalEvent from '../Popup/ModalEvent';
import { featchAddEvent, featchEvents } from '../../redux/actions/events'

const localizer = momentLocalizer(moment)
const userId = localStorage.getItem('auth-token') === null 
            ? '' 
            : JSON.parse(localStorage.getItem('auth-token')).data._id
const url = `http://localhost:3001/users/events/${userId}`


class CalendarEvent extends React.Component {
    constructor () {
        super();
        this.state = {
            isModal: false,
            form: {
                text: '',
                description: '',
                deadline: '',
            }
        }
    }

    showModal = () => {
        this.setState( { isModal: !this.state.isModal } )
    }

    handleInputChange = (event) =>{
        this.setState( { form : {...this.state.form, [event.target.name]: event.target.value} })
    }

    addEvent = () => {
        let newEvent = {
            color: 'blue',
            title: this.state.form.text,
            date: this.state.form.deadline
        }

        const url = `http://localhost:3001/users/addevents/${userId}`
        
        this.props.featchAddEvent( url, newEvent )

    }

    componentDidMount () {
        this.props.featchEvents(url, this.props.item)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ( prevProps.item !== this.props.item ){
            this.props.featchEvents(url, this.props.item)
        }
      }
    
    render (){
       return (
            <div className='Event-calendar'> 
                <Button
                    className="Event-button"
                    onClick={this.showModal}
                >
                    Добавить событие
                </Button>  
                <Calendar
                    localizer={localizer}
                    events={this.props.event}
                    titleAccessor="title"
                    startAccessor="date"
                    endAccessor="date"
                    views={['month', 'day', 'week']}
                    defaultDate={moment().toDate()}
                    style={{ 
                        height: "700px",
                        width: "100%"
                    }}
                    eventPropGetter={event => {
                        const backgroundColor = event && event.color;
                        return { style: { backgroundColor } };
                    }}
                />
                {
                    this.state.isModal 
                    ?   <ModalEvent
                            close = {this.showModal}
                            handleInputChange = {this.handleInputChange}
                            addEvent = {this.addEvent} 
                        />
                    : null
                }
            </div>
       )
    }
}

const mapStateToProps = state => {
    return {
        event: state.events.event
    }
}

const mapDispatchToProps =  {
        featchEvents,
        featchAddEvent,
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarEvent);