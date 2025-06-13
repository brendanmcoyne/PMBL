export {};

declare global {
    interface Window {
        google: {
            accounts: {
                id: {
                    initialize: (config: {
                        client_id: string;
                        callback: (response: GoogleCredentialResponse) => void;
                    }) => void;
                    renderButton: (
                        parent: HTMLElement,
                        options: {
                            theme: 'outline' | 'filled_blue' | 'filled_black';
                            size: 'small' | 'medium' | 'large';
                            type?: 'standard' | 'icon';
                            shape?: 'rectangular' | 'pill' | 'circle' | 'square';
                        }
                    ) => void;
                    prompt: () => void;
                    disableAutoSelect: () => void;
                };
            };
        };
    }

    interface GoogleCredentialResponse {
        credential: string;
        select_by: string;
    }
}