export default function({despatch}) {
  return next => action => {
    console.log(action);

    next(action);
  }
}
