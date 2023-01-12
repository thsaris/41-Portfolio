import { IsValid } from '../is-valid/IsValid.js';

function tiles(selector, data) {
    if (typeof selector !== 'string' || selector === '') {
        throw new Error('Selector turi buti stringas');
    }

    if (!IsValid.nonEmptyArray(data)) {
        throw new Error('Duomenys turi buti ne tuscias masyvas');
    }

    const hobbiesDOM = document.getElementById(selector);
    if (hobbiesDOM === null) {
        throw new Error(
            `Pagal pateikta selector (${selector}) nepavyko rasti norimo elemento`
        );
    }

    let HTML = '';

    for (const item of data) {
        if (
            !IsValid.object(item) ||
            !IsValid.icon(item.icon) ||
            !IsValid.text(item.text)
        ) {
            continue;
        }

        HTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 hobbie">
                    <div class="icon fa fa-${item.icon}"></div>
                    <p class="label">${item.text}</p>
                </div>`;
    }

    hobbiesDOM.innerHTML = HTML;
}

export { tiles };