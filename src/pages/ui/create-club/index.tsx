import { CreateClubForm } from "entites/create-club"
import { Breadcrumbs } from "shared/ui"

// страница создание клуба
const CreateClub = () => {
    return (
        <div className="wrapper__container">
            <Breadcrumbs
                data={[
                    {
                        to: `/my-clubs`,
                        label: "Мои клубы",
                    },
                    { to: "", label: 'Создание клуба' },
                ]}
            />
            <CreateClubForm data={null} />
        </div>
    )
}

export default CreateClub