<script>
  import { NotificationDisplay, notifier } from "@beyonk/svelte-notifications";
  import Close24 from "carbon-icons-svelte/lib/Close24";
  import LicenseThirdPartyDraft24 from "carbon-icons-svelte/lib/LicenseThirdPartyDraft24";
  import { createEventDispatcher } from "svelte";
  import { isEmpty, isValidEmail } from "../../../helpers/validators";
  import { addContact } from "./../services/contact.services.js";

  const dispatch = createEventDispatcher();

  let agree = false;
  let names = "";
  let email = "";
  let phone = "";
  let message = "";

  $: formIsValid =
    isEmpty(names) &&
    isValidEmail(email.toLowerCase()) &&
    isEmpty(phone) &&
    isEmpty(message) &&
    agree;

  const handleSubmit = async () => {
    if (formIsValid) {
      let result = await addContact(names, email, phone, message, agree);
      if (result) {
        formIsValid = false;
        cleanForm();
        notifier.success(`Mensaje enviado correctamente.`, 3000);
      } else {
        notifier.danger("Algo salio mal, verifique nuevamente.", 5000);
      }
    }
  };

  const cleanForm = () => {
    agree = false;
    names = "";
    email = "";
    phone = "";
    message = "";
  };

  const handleClose = () => {
    cleanForm();
    dispatch("closeFormContact");
  };
</script>

<NotificationDisplay />
<section
  class="flex flex-col max-w-sm p-5 mb-3 bg-white border rounded-md md:mb-0"
>
  <div class="flex flex-row items-center justify-between pb-3">
    <div class="flex flex-row items-center space-x-2">
      <LicenseThirdPartyDraft24 />
      <p class="text-lg font-semibold text-gray-900">Contacto</p>
    </div>
    <button
      on:click={handleClose}
      class="text-sm font-semibold text-right text-gray-900 bg-yellow-200 rounded-full"
      ><Close24 /></button
    >
  </div>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="w-full pb-2">
      <label class="label-form" for="names"
        >Nombre
        <input type="text" bind:value={names} class="input-form" />
      </label>
    </div>
    <div class="w-full pb-2">
      <label class="label-form" for="email">
        Correo
        <input class="input-form" type="text" bind:value={email} lowercase />
      </label>
    </div>
    <div class="w-full pb-2">
      <label class="label-form" for="phone">
        Teléfono
        <input class="input-form" type="text" bind:value={phone} />
      </label>
    </div>
    <div class="w-full pb-2">
      <label class="label-form" for="message">
        Mensaje
        <textarea
          type="textarea"
          rows="3"
          bind:value={message}
          class="input-form"
        />
      </label>
    </div>
    <div class="w-full mb-2">
      <p class="label-form">Acuerdo tratamiento de datos</p>
      <div class="flex items-baseline mt-2 space-x-2">
        <input
          class="inline-block"
          type="checkbox"
          name="agree"
          bind:checked={agree}
        />
        <span class="font-bold text-red-700">*</span>
        <p class="text-xs leading-tight text-gray-900">
          Doy mi consentimiento para que este sitio web almacene la información
          enviada para que puedan responder a mi consulta.
        </p>
      </div>
    </div>
    <div class="flex flex-col">
      <button
        class={formIsValid
          ? "btn mt-4"
          : "btn opacity-50 cursor-not-allowed mt-4"}
        disabled={!formIsValid}
        type="submit">Enviar</button
      >
    </div>
  </form>
</section>
