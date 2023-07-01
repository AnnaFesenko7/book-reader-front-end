import * as Yup from 'yup';

const now = new Date();
const today = Date.parse(now) + 3600 * 1000;
export const readingResultSchema = Yup.object().shape({
  dateInput: Yup.date()
    // .min(new Date(yesterday), t('results_err1'))
    .max(
      new Date(today)
      // , t('results_err2')
    ),
  pageInput: Yup.number()
    .integer
    //   t('results_err4')
    ()
    .min(
      1
      //   t('results_err3')
    )
    .max(
      999
      //   t('results_err5')
    )
    .required
    // t('results_err6')
    (),
});
