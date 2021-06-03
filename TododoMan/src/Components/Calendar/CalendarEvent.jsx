import React from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";
import './Calendar.css'
import moment from 'moment';
import Button from '../Button/Button';
import ModalEvent from '../Popup/ModalEvent';
const localizer = momentLocalizer(moment)

class CalendarEvent extends React.Component {
    constructor () {
        super();
        this.state = {
            event: [],
            isModal: false,
            form: {
                text: '',
                description: '',
                deadline: '',
            }
        }
        this.ModalRef = React.createRef();
    }

    getTodoEvents() {
        const data = this.props.item
        let event = [];
        data.map( item  => {
            item.tasks.map( curItm => {
                event.push({
                    color: item.colorName,
                    title: curItm.text,
                    date: curItm.deadline
                })
                
            } )
        })
        this.setState({ 
            event,
        })     
    }

    showModal = () => {
        this.setState( { isModal: true } )
    }

    closeModal = () => {
        this.setState( { isModal: false } )
    }

    handleOutsideClick = (e) => {
        const path = e.path || (e.composedPath && e.composedPath());
        if (!path.includes(this.ModalRef.current)){
            this.setState( { isModal: false } )
        }
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
        this.setState( {
            event: [...this.state.event, newEvent]
        })
    }
    // componentWillMount(){
    //     this.getTodoEvents();
    //     console.log(this.props.item)
        
    // }

    componentDidMount (prevProps, prevState) {
        // console.log(this.state.event)
        this.getTodoEvents();
        // document.body.addEventListener('click', this.handleOutsideClick)
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.event.length > this.state.event.length){
            console.log('ss')
        }
    }

    render (){
        console.log(this.state.event)
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
                    events={this.state.event}
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
                            close = {this.closeModal}
                            ModalRef = {this.ModalRef}
                            handleInputChange = {this.handleInputChange}
                            addEvent = {this.addEvent} 
                        />
                    : null
                }
            </div>
       )
    }
}

export default CalendarEvent
