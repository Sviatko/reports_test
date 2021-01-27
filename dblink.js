testData = [
  ['ALBERTAZZI PAOLA',	'00040, POMEZIA',	'V',	'26/01/2021',	'фотозвіт',	'S_bug', 'I_1'],
  ['ZIACO MARIA PIA',	  '00040, POMEZIA',	'V',	'26/01/2021',	'фотозвіт',	'S_tt', 'I_56'],
  ['GALASSI SAS',	'00042, ANZIO',	'V',	'26/01/2021',	'фотозвіт',	'S_0', null]

]
fields = {
  NAME: 0,
  ADDRESS: 1,
  SUBTYPE: 2,
  VISIT_DATE: 3,
  SECTION_NAME: 4,
  PDL_RESULT: 5,
  MSL_RATE: 6
}

statement = {
  currInd: -1,
  Close: function () {
  },
  RowCount: 3,
  Step: function () {
    this.currInd += 1;
  },
  ColumnValue: function (col) {
    return testData[ this.currInd][fields[col]]
  },
  ColumnName: function (col) {
    return Object.keys(fields)[col];
  }
}

Connection = {
  Prepare: function (sql) {
    statement.currInd = -1;
    return statement
  }
}
