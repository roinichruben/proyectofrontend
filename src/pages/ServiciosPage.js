import '../styles/components/pages/ServiciosPage.css'
const ServiciosPage = (props) => {
    return (
        <main className="holder">
            <h2>Estos son algunos de los servicios que ofrecemos</h2>
            <div className="servicio">
                <img src="img/servicios/porcelanato.jpeg"></img>
                <div className="info">
                    <h4>Porcelanato líquido</h4>
                    <p>Preparación de la superficie y aplicación de porcelanato liquido. Tenemos una muestra de trabajos anteriores y de distintos patrones para que el cliente elija el de se agrado.</p>
                </div>
            </div>
            <div className="servicio">
                <img src="img/servicios/micro.jpeg" alt="" />
                <div className="info">
                    <h4>Microcemento alisado</h4>
                    <p>Preparación de la superficie y aplicación de microcemento. Pueden acceder a ver trabajos anteriores o si bien los desean podemos aconsejarlos sobre los colores y matices que se pueden aplicar en cuanto al gusto del cliente</p>

                </div>
            </div>

            <div className="servicio">
                <img src="img/servicios/mesadas.jpeg" alt="" />
                <div className="info">
                    <h4>Mesadas</h4>
                    <p>¿Queres renovar tu mesada? Ofrecemos un servicio de aplicación de porcelanato liquido sobre mesadas. Tenemos varios trabajos publicados para que veas el resultado final de la misma</p>
                </div>

            </div>
            <div className="servicio">
                <img src="img/servicios/industriales.jpeg" alt="" />
                <div className="info">
                    <h4>Pisos industriales o comerciales</h4>
                    <p>Ofrecemos el servicio de  aplicación de microcemento de alto tránsito para pisos industriales o comerciales.</p>
                </div>

            </div>
            <div className="servicio">
                <img src="img/servicios/porcelanato3d.jpg" alt="" />
                <div className="info">
                    <h4>Pisos 3D</h4>
                    <p>Realizamos trabajos en 3D. Trabajamos con una empresa que nos provee los vinilos de las más alta calidad. El cliente puede elegir el motivo que desee, del resto nos encargamos nosotros.</p>
                </div>

            </div>
            <div className="servicio">
                <img src="img/servicios/piscinas3d.jpeg" alt="" />
                <div className="info">
                    <h4>Piscinas 3D</h4>
                    <p>¿Querés renovar tu piscina? ¿No te basta con pintarla y queres ir al siguiente nivel? Te ofrecemos un servicio de colocación de vinilo y porcelanato liquido para darle ese toque distinto. Para más informacion contactáctanos.</p>
                </div>

            </div>



        </main>
    );

}

export default ServiciosPage;