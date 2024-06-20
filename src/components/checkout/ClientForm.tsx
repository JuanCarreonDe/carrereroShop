import { Input } from "../ui/Input";

export const ClientForm = () => {
  return (
    <form className="flex flex-col gap-10">
      <div>
        <h2>Contacto</h2>
        <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
          <Input type="email" id="email"/>
          <Input type="tel" id="phone"/>
          <Input type="text" id="name"/>
          <Input type="text" id="lastName"/>
        </div>
      </div>
      <div>
        <h2>Dirección</h2>
        <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2 ">
          <Input type="text" id="state"/>
          <Input type="text" id="municipality"/>
          <Input type="text" id="neighborhood"/>
          <Input type="text" id="street"/>
          <Input type="number" id="number"/>
          <Input type="text" id="postalCode"/>
        </div>
      </div>
    </form>
  );
};
