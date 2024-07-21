export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile/${profileId}`,
    headers: { authorization: 'asasf' },
    body: {
        id: '4',
        first: 'TestChanged?',
        lastname: 'Worningdude',
        age: '20',
        currency: 'RUB',
        country: 'Russia',
        city: 'Minsk',
        username: 'warning?',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRysd6Q41MAApaIJoCdFdpGGPu7JCkv0CLyyQ&s',
    },
});

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;

            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
