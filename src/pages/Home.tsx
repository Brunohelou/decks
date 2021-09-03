
import { useState } from 'react';
import { Size, Color, getColors, getSizes, getColor, getSize } from '../data/items';
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter
} from '@ionic/react';
import './Home.css';
interface Pedido  {
  color:'white',
  size:'p',
  amount:0
};



const Home: React.FC = () => {
  const colors: Color[] = getColors();
  const sizes: Size[] = getSizes();
  const [selectedColor, setSelectedColor] = useState<string>('none');
  const [selectedSize, setSelectedSize] = useState<string>('none');
  const [amount, setAmount] = useState<number>();
  const { control, register, handleSubmit, formState:{errors}  } = useForm();
  const onSubmit: SubmitHandler<Pedido> = data => window.alert("Quantidade:"+data.amount.toString()+"\n"+data.color+"\n"+data.size);

  

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle className="title">Ordem de Compra</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent  fullscreen >
        <IonList>
        <form onSubmit={handleSubmit(onSubmit)}>
        <IonItem >
          <IonRadioGroup  value={selectedColor} onIonChange={e => { setSelectedColor(e.detail.value);console.log(selectedColor)} }>
          <div style={{width:"90vw"}} >
          <div style={{color:'gray', fontSize:'20px', paddingTop:'20px'}}>Escolha uma cor</div>
          {colors.map((color, i) => 
          <IonItem>
            <IonLabel>{color.color_name}</IonLabel>
            <IonRadio {...register("color", { required: true, minLength:1 })} slot="end" value={color.color_name} />
            <IonImg style={{width:"50%", borderRadius:'7px', overflow:'hidden' }} src={color.color_url} />
            </IonItem>)}
          </div>
          </IonRadioGroup>
          </IonItem>

          
          <IonItem>
          <IonRadioGroup 	allow-empty-selection={true}  value={selectedSize} onIonChange={e =>{ setSelectedSize(e.detail.value); console.log(selectedSize)}}>
          <div style={{width:"90vw"}}>
          <div style={{color:'gray', fontSize:'20px', paddingTop:'20px'}}>Escolha um tamanho</div>
          {sizes.map((size, i) => 
          <IonItem>
            <IonLabel>{size.size}</IonLabel>
            <IonRadio  {...register("size", { required: true, minLength:1})}  slot="end" value={size.size} />
        
            </IonItem>)}
          </div>
          </IonRadioGroup>
          
          
          </IonItem>

          <IonItem>
          <div style={{width:"100vw", display:"inline-block"}}>
            
          <IonInput  {...register("amount", { required: true, min:{ value: 20, message:'Quantidade não permitida'}, max:{value:99,message:"quantidade acima do permitido"}})}  type="number" slot="start" value={amount} placeholder="Quantidade" onIonChange={e => setAmount(parseInt(e.detail.value!, 10))}></IonInput>

      
        <ErrorMessage
          errors={errors}
          name="amount"
          render={({ message }) => <p style={{color:"rgb(196, 58, 58)"}}>{message}</p>}
        />
          </div>
          </IonItem>
          <div style={{width:'100vw', textAlign:'center'}}>
          <IonButton  style={{marginTop:'15px', width:'80vw'}} slot="end" type="submit" >Adicionar ao Pedido</IonButton>
          </div>
          </form>
          </IonList>
          <div style={{width:'100vw', textAlign:'center', marginBottom:'50px'}}>
          <IonButton  style={{marginTop:'15px', width:'80vw'}} color="warning" slot="end" type="submit" >Finalizar Pedido</IonButton>
          </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
