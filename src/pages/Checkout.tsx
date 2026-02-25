import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { books } from "@/data/books";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useMemo, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const paymentOptions = [
  { value: "pix", label: "Pix" },
  { value: "cartao", label: "Cartão de crédito" },
  { value: "boleto", label: "Boleto bancário" },
] as const;

const Checkout = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState<(typeof paymentOptions)[number]["value"]>("pix");

  const book = books.find((item) => item.id === id);

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);

  const selectedPaymentLabel = useMemo(
    () => paymentOptions.find((option) => option.value === paymentMethod)?.label ?? "forma de pagamento",
    [paymentMethod]
  );

  if (!book) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-4">
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>Produto não encontrado</CardTitle>
            <CardDescription>
              Não foi possível localizar esse item para compra.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link to="/">Voltar para o catálogo</Link>
            </Button>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-4xl space-y-6">
        <Button asChild variant="ghost" className="pl-0">
          <Link to="/" className="inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Voltar para o catálogo
          </Link>
        </Button>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Resumo da compra</CardTitle>
              <CardDescription>Confira os dados do produto selecionado.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <img
                src={book.image}
                alt={book.title}
                className="h-56 w-full rounded-md object-contain bg-secondary/40"
              />
              <div>
                <p className="text-sm text-muted-foreground">Livro</p>
                <h1 className="text-2xl font-serif text-foreground">{book.title}</h1>
                <p className="text-sm text-muted-foreground">{book.author}</p>
              </div>
              <div className="border-t pt-4 flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Total</span>
                <strong className="text-2xl text-primary">{formatPrice(book.price)}</strong>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Forma de pagamento</CardTitle>
              <CardDescription>Escolha uma opção para finalizar a compra.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as typeof paymentMethod)}>
                {paymentOptions.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 rounded-md border p-3">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <Button
                className="w-full"
                onClick={() => {
                  toast({
                    title: "Pedido criado com sucesso",
                    description: `Pagamento via ${selectedPaymentLabel}. Em produção, aqui chamamos a API para gerar a cobrança.`,
                  });
                }}
              >
                Finalizar compra
              </Button>

              <div className="rounded-md border border-dashed p-4 text-sm text-muted-foreground">
                <p className="font-medium text-foreground inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Próximo passo para pagamento real
                </p>
                <p className="mt-2">
                  Integre este botão com seu backend para criar o pedido e iniciar o pagamento (Pix, cartão ou boleto) no seu provedor escolhido.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
