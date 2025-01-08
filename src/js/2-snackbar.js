import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayInput = form.elements.delay;
const stateInputs = form.elements.state;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const delay = Number(delayInput.value);
  const state = [...stateInputs].find(input => input.checked)?.value;

  if (!state) {
    iziToast.error({
      title: 'Error',
      message: 'Please select a state',
    });
    return;
  }

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch(delay => {
      iziToast.error({
        title: 'Failure',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}
