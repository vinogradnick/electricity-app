import {Injectable} from '@angular/core';
import {Workbook, Worksheet} from 'exceljs';
import * as fs from 'file-saver';

import {DatePipe} from '@angular/common';
import {Tables} from './electricity-center/request-constructor/Tables';
import {Workload} from './models/workload';
import {Customer} from './models/customer';
import {PowerUsage} from './models/power-usage';
import {CustomerServiceService} from './electricity-center/customer-service.service';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor(private datePipe: DatePipe,
              private cus: CustomerServiceService) {
  }

  generateExcel(title: string, header: any[], data: any[]) {
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet(title);
    let titleRow = worksheet.addRow([title]);
    worksheet.addRow([]);
    let headerRow = worksheet.addRow(header);

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: {argb: 'FFFFFF00'},
        bgColor: {argb: 'FF0000FF'}
      };
      cell.border = {top: {style: 'thin'}, left: {style: 'thin'}, bottom: {style: 'thin'}, right: {style: 'thin'}};
    });
    worksheet.addRow([]);
    data.forEach(d => {
      let row = worksheet.addRow(d);
      let qty = row.getCell(5);

    });
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      fs.saveAs(blob, title + '.xlsx');
    });
  }

  generateDataSet(name: string, arr: any[], title: string): void {
    let data = [];
    confirm('download file');
    console.log(Tables);
    let table = Tables.find(el => el.name == name);
    let header: any[] = table.boxes.map(el => el.disp);
    console.log(header);
    data = this.CollectData(table.boxes.map(el => el.name), arr);

    console.log(data);
    this.generateExcel(title, header, data);
  }

  CollectData(names: string[], arr: any[]): any[] {
    console.log(names);
    console.log(arr);
    let fArr = [];
    for (let i = 0; i < arr.length; i++) {
      let data = [];
      console.log(arr[i]);
      names.forEach(el => data.push(arr[i][el]));
      fArr.push(data);
      console.log(data);
    }
    return fArr;
  }

  reportCountPointConnection(data: any[]) {
    let workBook = new Workbook();
    data.forEach((el,index) => {
      workBook.worksheets.push(this.reportCountSheet(workBook, el.name + el.id+'_'+index, el, []));
    });

    workBook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      fs.saveAs(blob, 'Подсчет количество точек подключения' + new Date() + '__.xlsx');
    });
  }

  reportCustomers(customers: Customer[]) {
    let workBook = new Workbook();
    customers.forEach(el => {
      workBook.worksheets.push(this.reportCustomer(workBook, el.name, el, []));
    });

    workBook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      fs.saveAs(blob, 'Отчет по отключенным потребителям' + new Date() + '__.xlsx');
    });
  }

  private reportCountSheet(workBoox: Workbook, objectName: string, data: any, customers: Customer[]): Worksheet {
    let workSheet = workBoox.addWorksheet(objectName);
    let title = workSheet.addRow([objectName]);
    let title1 = workSheet.addRow(['Информация по энергообъекту']);

    workSheet.getCell('A3').value = 'Наименование объекта';
    workSheet.getCell('A4').value = 'Номер объекта';
    workSheet.getCell('A5').value = 'Тип объекта';
    workSheet.getCell('A6').value = 'Мощность';
    workSheet.getCell('A7').value = 'Напряжение';
    workSheet.getCell('A8').value = 'Геопозиция';

    workSheet.getCell('B3').value = data.name;
    workSheet.getCell('B4').value = data.id;
    workSheet.getCell('B5').value = data.type;
    workSheet.getCell('B6').value = data.power;
    workSheet.getCell('B7').value = data.voltage;
    workSheet.getCell('B8').value = data.geocode;

    workSheet.getCell('D3').value = 'Номер договора';
    workSheet.getCell('E3').value = 'Наименование потребителя';
    workSheet.getCell('F3').value = 'Наименование объекта';
    workSheet.getCell('G3').value = 'Категория потребителя';
    workSheet.getCell('H3').value = 'Статус потребителя';
    customers.forEach((el, index) => {
      index += 2;
      workSheet.getCell('D' + index).value = el.id;
      workSheet.getCell('E' + index).value = el.name;
      workSheet.getCell('F' + index).value = el.objectName;
      workSheet.getCell('G' + index).value = '3';
      workSheet.getCell('H' + index).value = el.status;
    });

    return workSheet;
  }

  private reportCustomer(workBook: Workbook, objectName: string, list: Customer, listUsages: PowerUsage[]): Worksheet {
    let workSheet = workBook.addWorksheet(objectName);
    let title = workSheet.addRow([objectName]);
    let title1 = workSheet.addRow(['Информация по потребителю']);

    workSheet.getCell('A3').value = 'Номер договора';
    workSheet.getCell('A4').value = 'Привязка к фидеру';
    workSheet.getCell('A5').value = 'Привязка к ТП';
    workSheet.getCell('A6').value = 'Привязка к Линии';
    workSheet.getCell('A7').value = 'Наименование объекта';
    workSheet.getCell('A8').value = 'Наименование потребителя';
    workSheet.getCell('A9').value = 'Адрес объекта';
    workSheet.getCell('A10').value = 'Категория потребителя';
    workSheet.getCell('A11').value = 'Информация по счетчику';
    workSheet.getCell('A12').value = 'Наименование счетчика';
    workSheet.getCell('A13').value = 'Марка счетчика';
    workSheet.getCell('A14').value = 'Номер счетчика';
    workSheet.getCell('A15').value = 'Дата установки';
    workSheet.getCell('A16').value = 'Дата последней проверки';


    workSheet.getCell('B3').value = list.id;
    workSheet.getCell('B4').value = '0';
    workSheet.getCell('B4').value = '0';
    workSheet.getCell('B6').value = list.lineId;
    workSheet.getCell('B7').value = list.objectName;
    workSheet.getCell('B8').value = list.name;
    workSheet.getCell('B9').value = list.objectAddress;
    workSheet.getCell('B10').value = '3';
    workSheet.getCell('B12').value = list.counter.name;
    workSheet.getCell('B13').value = list.counter.brand.name;
    workSheet.getCell('B14').value = list.counter.id;
    workSheet.getCell('B15').value = list.counter.date;
    workSheet.getCell('B16').value = list.counter.dateLastCheck;

    workSheet.getCell('D2').value = 'Список подсчета затрат';

    workSheet.getCell('D3').value = 'Идентификатор';
    workSheet.getCell('E3').value = 'Дата замера';
    workSheet.getCell('F3').value = 'Период ';
    workSheet.getCell('G3').value = 'Зафиксированная мощность';
    workSheet.getCell('H3').value = 'Статус потребителя';


    listUsages.forEach((usage, index) => {
      index += 2;
      workSheet.getCell('D' + index).value = usage.id;
      workSheet.getCell('E' + index).value = usage.date;
      workSheet.getCell('F' + index).value = usage.period;
      workSheet.getCell('G' + index).value = usage.value;
      workSheet.getCell('H' + index).value = usage.customer.status;
    });
    return workSheet;
  }

  workloadReportExcel(data: Workload[]) {
    let excel = new Workbook();
    data.forEach(el => {
      console.log(el);
      excel.worksheets.push(this.worklodReport(excel, el));
    });
    excel.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
      fs.saveAs(blob, 'Отчет по замеру нагрузок' + new Date() + '__.xlsx');
    });
  }

  worklodReport(excel: Workbook, workload: Workload): Worksheet {
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let workSheet = excel.addWorksheet('Ведомость по замеру нагрузок-'+workload.id);

    workSheet.getCell('A1').value = 'Ведомость по замеру нагрузок';
    if(workload.tp){
      workSheet.getCell('A3').value = 'ТП-' + workload.tp.id;

    };
    workSheet.getCell('A4').value = 'U,B   I Секция шин';
    workSheet.getCell('A5').value = 'AB';
    workSheet.getCell('B5').value = 'BC';
    workSheet.getCell('C5').value = 'AC';

    workSheet.getCell('D4').value = 'U,B   II Секция шин';

    workSheet.getCell('D5').value = 'AO';
    workSheet.getCell('E5').value = 'BO';
    workSheet.getCell('F5').value = 'CO';

    workSheet.getCell('G4').value = 'Положение Анцапфы';
    workSheet.getCell('G5').value = '1,2,3,4,5';


    workSheet.getCell('H4').value = 'U,B   II Секция шин';

    workSheet.getCell('H5').value = 'AB';
    workSheet.getCell('I5').value = 'BC';
    workSheet.getCell('J5').value = 'AC';

    workSheet.getCell('K4').value = 'U,B   II Секция шин';

    workSheet.getCell('L5').value = 'AO';
    workSheet.getCell('M5').value = 'BO';
    workSheet.getCell('N5').value = 'CO';
    workSheet.getCell('O4').value = 'Положение Анцапфы';
    workSheet.getCell('O5').value = '1,2,3,4,5';


    workload.busbarSections.forEach((el, index) => {

      if (index < 12 || index != 7) {
        workSheet.getCell(alphabet[index] + '6').value = el.value;
      }
    });


    //fill data of data
    workSheet.getCell('D3').value = 'Число';
    workSheet.getCell('E3').value = workload.date.toString();
    workSheet.getCell('F3').value = 'Месяц';
    //workSheet.getCell('G3').value = workload.date.getMonth();
    workSheet.getCell('F3').value = 'Год';
   // workSheet.getCell('G3').value = workload.date.getFullYear();
    workSheet.getCell('H3').value = 'Время года';
    //workSheet.getCell('I3').value = workload.date.getMonth();
    workSheet.getCell('J3').value = 'Время';
   // workSheet.getCell('K3').value = workload.date.getHours() + ':' + workload.date.getMinutes();


    workSheet.getCell('A8').value = 'T2,S';
    workSheet.getCell('B8').value = 400;

    workSheet.getCell('C8').value = 'Номинальный ток T1';
    workSheet.getCell('D8').value = 576;

    workSheet.getCell('E8').value = 'В работе';
    workSheet.getCell('F8').value = ' Да/Нет';


    workSheet.getCell('H8').value = 'T1,S';
    workSheet.getCell('I8').value = 326;

    workSheet.getCell('J8').value = 'Номинальный ток T1';
    workSheet.getCell('K8').value = 460.8;

    workSheet.getCell('L8').value = 'В работе';
    workSheet.getCell('M8').value = ' Да/Нет';


    workSheet.getCell('A10').value = '1 Секция';
    workSheet.getCell('A11').value = 'Наименование Линии (Номер рубильника)';
    workSheet.getCell('B11').value = 'Наименование объекта (Точка замера)';
    workSheet.getCell('C11').value = 'Нагрузка по фазам и нуле, A';
    workSheet.getCell('G11').value = 'Марка, сечение кабеля (Провода)';
    workSheet.getCell('H11').value = 'Допустимый ток , A';
    workSheet.getCell('K11').value = '% загрузки трансформаторного кабеля';


    workSheet.getCell('C12').value = 'A';
    workSheet.getCell('D12').value = 'B';
    workSheet.getCell('E12').value = 'C';
    workSheet.getCell('F12').value = 'F';

    workSheet.getCell('H12').value = 'I кабеля (Провода)';
    workSheet.getCell('I12').value = 'I пл.вст';

    if(workload.phases){
      workload.phases.forEach((phase, index) => {
        index += 13;
        workSheet.getCell('A' + index).value = phase.name;
        workSheet.getCell('B' + index).value = 'яч.1';
        if(phase.values)
        for (let i = 0; i < 5; i++) {
          workSheet.getCell(alphabet[i + 2] + '' + index).value = phase.values[i].value;
        }
        workSheet.getCell('I' + index).value = '250A';

      });
    }


    return workSheet;

//todo доделать формирование отчета по замеру нагрузок

  }


}
