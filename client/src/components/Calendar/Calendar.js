import React, { Component } from 'react';
import moment from 'moment'
import { Link } from 'react-router-dom'
import 'moment/locale/es'
import apiClient from '../../services/ApiClient'
class Calendar extends Component {

  componentDidMount() {


  }
  render() {

    moment.locale('es')


    var getDaysArray = function (year, month) {
      var monthIndex = month - 1;
      var names = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
      var date = new Date(year, monthIndex, 1);
      var mes = moment(monthIndex, 'M').add(1, 'month').format('MMMM');
      var result = [];
      while (date.getMonth() == monthIndex) {
        /* result.push(date.getDate() + "-" + names[date.getDay()] + "-"); */
        result.push(names[date.getDay()] + " " + date.getDate() + " de " + mes);
        date.setDate(date.getDate() + 1);
      }
      return result;
    }

    var getMonths = function () {
      var monthIndex = 1;
      var mes = moment(monthIndex, 'M').add(monthIndex).format('MMMM');
      var result = [];

      while (monthIndex < 13) {
        /* result.push(date.getDate() + "-" + names[date.getDay()] + "-"); */
        result.push(mes);
        monthIndex += 1
      }
      return result;
    }
    console.log(getMonths())

    return (



      < div >
        <div className=" centered message ui header ">
          {moment().format("dddd, D MMMM  YYYY, HH:mm:ss")}
        </div>




        <div className="ui   card header centered ">
          <Link to={{ pathname: "/day", state: { dia: moment().format('LL') } }}>
            <div>
              Hoy
          </div>
            {moment().format('LL')}
            <div className="ui  card header  centered">

            </div>
          </Link>
        </div>



        {/*  {getDaysArray(2020, 6).map((day, index) => {
          return (
            <div key={index}>
              <div className="ui   card header centered ">
                <div>
                  <br></br>
                </div>
                {day}
                <div className="ui  card header  centered">
                </div>
              </div>
              <br></br>
            </div>

          )
        })}
 */}






      </div >
    )
  }

}


export default Calendar 