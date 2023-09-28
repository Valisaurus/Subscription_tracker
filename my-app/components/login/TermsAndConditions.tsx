type TermsAndConditionsProps = {
  email: string;
  password: string;
};

const TermsAndConditions = ({ email, password }: TermsAndConditionsProps) => {
  return (
    <div className="w-full flex flex-col justify-around items-center p-[70px]">
      <div className="w-[250] h-[529px] border-black border-4 dark:border-white text-black dark:text-white p-[20px] overflow-scroll">
        <p>CTRL + VILLKOR OCH BESTÄMMELSER</p>
        <br />
        <p>Senast uppdaterad: 4 september 2023</p>
        <br />
        <p>
          Välkommen till CTRL +, en kraftfull och innovativ tjänst utformad för
          att förbättra din prenumerations-upplevelse. Läs dessa villkor och
          bestämmelser noggrant innan du använder CTRL +. Genom att använda
          denna tjänst samtycker du till att följa och vara bunden av dessa
          villkor och bestämmelser. Om du inte godkänner dessa villkor och
          bestämmelser, använd inte denna tjänst.
        </p>

        <p>Acceptans av Villkor</p>

        <p>
          Genom att använda CTRL + erkänner du att du har läst, förstått och
          godkänt att vara bunden av dessa villkor och bestämmelser. Om du inte
          samtycker till någon del av dessa villkor, avstå från att använda
          denna tjänst.
        </p>
        <br />

        <p>Insamling av Information</p>
        <br />

        <p>CTRL + samlar in följande information:</p>
        <br />

        <p>
          Namn: För att anpassa din upplevelse inom tjänsten. E-postadress: För
          att kommunicera med dig, skicka viktiga uppdateringar och förbättra
          våra tjänster. Telefonnummer (valfritt): För kommunikation och
          återställning av kontot.
        </p>
        <br />

        <p>Data-användning</p>
        <br />

        <p>
          Genom att använda CTRL + samtycker du till insamling, bearbetning och
          lagring av dina data enligt beskrivningen i vår integritetspolicy. Vi
          kan använda dina data för följande ändamål: Att tillhandahålla,
          upprätthålla och förbättra våra tjänster. Att skicka viktiga
          uppdateringar, reklammaterial och annonser. Att svara på dina
          förfrågningar, kommentarer eller frågor. Att följa lagliga
          skyldigheter och skydda våra rättigheter.
        </p>
        <br />

        <p>Datalagring</p>
        <br />

        <p>
          CTRL + behåller användardata i en period av ett år efter användarens
          senaste aktivitet inom tjänsten. Efter denna period kommer data att
          raderas permanent från våra servrar.
        </p>
        <br />

        <p>Säkerhet</p>
        <br />

        <p>
          CTRL + vidtar rimliga åtgärder för att skydda dina data, men inget
          system är helt säkert. Vi kan inte garantera säkerheten för dina data,
          och du använder tjänsten på egen risk.
        </p>
        <br />

        <p>Uppsägning</p>
        <br />

        <p>
          CTRL + förbehåller sig rätten att avsluta eller suspendera ditt konto
          och åtkomst till tjänsten enligt vårt eget gottfinnande, utan
          föregående meddelande, av vilken anledning som helst, inklusive men
          inte begränsat till brott mot dessa villkor och bestämmelser.
        </p>
        <br />

        <p>Ändringar i Villkor och Bestämmelser</p>
        <br />

        <p>
          CTRL + kan uppdatera dessa villkor och bestämmelser med jämna
          mellanrum. Eventuella ändringar träder i kraft omedelbart efter att de
          har publicerats i reviderade villkor och bestämmelser inom tjänsten.
          Din fortsatta användning av tjänsten efter sådana ändringar utgör ditt
          godkännande av de uppdaterade villkoren och bestämmelserna.
        </p>
        <br />

        <p>Kontakta Oss</p>
        <br />

        <p>
          Om du har några frågor eller funderingar angående dessa villkor och
          bestämmelser eller tjänstens användning av dina data, kontakta oss på:
          terms@ctrlplus.com
        </p>
        <br />

        <p>Tillämplig Lag</p>
        <br />

        <p>
          Dessa villkor och bestämmelser regleras av och tolkas i enlighet med
          Sveriges lagar, utan hänsyn till dess kollision av lagprinciper. Genom
          att använda CTRL + tjänsten samtycker du till dessa villkor och
          bestämmelser. Tack för att du valde CTRL +, och vi hoppas att du
          kommer att njuta av din upplevelse med vår tjänst.
        </p>
        <br />
      </div>
      <form action="/auth/sign-up" method="post">
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="password" value={password} />
        <button className="w-[250px] h-[40px] border-black border-4 dark:border-white text-black dark:text-white mt-[30px]">
          Godkänn
        </button>
      </form>
    </div>
  );
};
export default TermsAndConditions;
