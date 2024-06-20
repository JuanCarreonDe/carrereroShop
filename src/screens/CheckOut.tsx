import { useState } from "react";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { ClientForm } from "../components/checkout/ClientForm";
import { PaymentForm } from "../components/checkout/PaymentForm";
import { Confirmation } from "../components/checkout/Confirmation";

export const CheckOut = () => {
  const [step, setStep] = useState<number>(0);

  const swich = () => {
    switch (step) {
      case 0:
        return <ClientForm/>;
        break;

      case 1:
        return <PaymentForm/>;
        break;

      case 2:
        return <Confirmation/>;
        break;
      default:
        break;
    }
  };

  return (
    <section className="flex flex-col gap-14">
      <Nav />
      <main className="w-full flex flex-col sm:flex-row gap-14 pt-[20vh] p-4 sm:px-14">
        <div className="flex-[2] flex gap-10 flex-col">
          <div className="flex w-full">
            <div onClick={() => setStep(0)} className="flex flex-col gap-2 items-center flex-1 cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-neutral-600" />
              <button>Datos del cliente</button>
            </div>
            <div onClick={() => setStep(1)} className="flex flex-col gap-2 items-center flex-1 cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-neutral-600" />
              <button>Envio y pago</button>
            </div>
            <div onClick={() => setStep(2)} className="flex flex-col gap-2 items-center flex-1 cursor-pointer">
              <div className="w-3 h-3 rounded-full bg-neutral-600" />
              <button>
                Confirmación del pedido{" "}
              </button>
            </div>
          </div>
          {swich()}
          <button onClick={() => {
            step !== 2 ? setStep(step + 1) : ''
          }
          } className="px-3 py-2 bg-neutral-900 rounded-md text-sm">Next</button>
        </div>
        <aside className="flex-1 rounded-md bg-neutral-900">
          <img src="" alt="" className="w-full aspect-square" />
        </aside>
      </main>
      <Footer />
    </section>
  );
};
