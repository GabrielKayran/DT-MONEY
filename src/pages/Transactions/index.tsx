import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td >
                <PriceHighlight variant="income">R$ 12.000</PriceHighlight>
              </td>
              <td>Desenvolvimento</td>
              <td>13/04/2021</td>
            </tr>
            <tr>
              <td width="50%">Aluguel</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 1.200</PriceHighlight>
              </td>
              <td>Casa</td>
              <td>14/04/2021</td>
            </tr>

          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}