import { useState, useRef, useEffect } from "react";
import { Autocomplete, Loader, Container, Stack, Text, Title, Button } from "@mantine/core";
import { Link } from "react-router-dom";
import '@mantine/core/styles.css';
import { Server } from "http";

// props for the autoload;
interface AutocompleteLoadingProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
function AutocompleteLoading({value, setValue}: AutocompleteLoadingProps) {
  // window.ResizeObserver = undefined;
  const timeoutRef = useRef<number>(-1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const handleChange = (val: string) => {
    window.clearTimeout(timeoutRef.current)
    setValue(val);
    setData([]);

    if(val.trim().length === 0 || val.includes('@')) {
      setLoading(false);
    }
  };

  return (
    <Autocomplete
      value={value}
      data={data}
      onChange={handleChange}
      rightSection={loading ? <Loader size="1rem" /> : null}
      placeholder="Twój email"
      className="max-w"
    />
  );
}


export default function ContactCard() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  //simple email regex.
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if(!validateEmail(email)) {
      setError("Proszę podać prawidłowy adres e-mail.");
      return;
    }
    setSuccess("E-mail sent ;)");
    // TODO: Implement the actual sending email func. /w running Server.
    // try {
    //   const response = await fetch("/api/send-email", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email }),
    //   });
    //   if(response.ok) {
    //     setSuccess("Email sent successfully!");
    //   } else {
    //     setError("Failed to send email.");
    //   }
    // } catch(error) {
    //   setError("An error occured, Please try again.");
    // }
  };
  
  return (
      <section className="stopka w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                  Zapisz się do Newslettera!
                  {/* Newsletter! */}
                </h1>
                <p className="max-w-[600px] text-zinc-200 md:text-xl dark:text-zinc-100 mx-auto">
                  Dołącz do naszego mailingu i bądź na bieząco z najnowszymi wydarzeniami.
                  {/* Join our mailing system! */}
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 mx-auto">
                <form onSubmit={handleSubmit} className="inline-flex space-x-2">
                  <AutocompleteLoading value={email} setValue={setEmail} />
                  <Button className="bg-white text-black" type="submit"
                  style={{
                      backgroundColor: '#2563eb',
                      color: 'white',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.25rem',
                      border: 'none',
                      fontWeight: 'bold',
                      flexShrink: 0
                    }}
                  >
                    Zapisz się
                    {/* Sign up */}
                  </Button>
                </form>
                {error && <Text style={{ color: 'red', fontSize: '0.75rem' }}>{error}</Text>}
                {success && <Text style={{ color: 'green', fontSize: '0.75rem' }}>{success}</Text>}
                <p className="text-xs text-zinc-200 dark:text-zinc-100">
                  Zdobądź sportowe informacje przed wszystkimi. 
                  {/* Sport news! */}
                  <Link className="underline underline-offset-2 text-white" to="#" >
                    Regulamin
                    {/* Terms & Conditions */}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}