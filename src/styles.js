import styled from 'styled-components'

export const Card = styled.div`
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12);
    max-width: 345px;
    color: #fff;
    min-height: 200px;
    background-color: #424242;
    margin: 5px;
`;

export const CardHeader = styled.div`
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CardHeaderAvater = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25
`;

export const CardHeaderText = styled.div`
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.01071em;
    line-height: 1.43;
`;

export const CardHeaderIconc = styled.span``;

export const CardBodyImg = styled.img`
    display: inline-block;
    width: 100%;
    height: auto;
`;

export const CardFooter = styled.div`
    font-size: 0.875rem;
    font-weight: 400;
    letter-spacing: 0.01071em;
    line-height: 1.43;
    padding: 16px;
`;

export const  CardComments = styled.div`
    width: 100%;
    padding: 16px;
`;

export const CardCommentItem = styled.p`
    margin-bottom: 16px;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
`;

export const MoreButton = styled.div`
    width: 100px;
    height: 50px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;
    margin-bottom: 20px;
    margin-left: 16px;
`;

export const CreateCommentBox = styled.div`
    width: 100%;
    padding: 16px;
`;

export const CommentInput = styled.input`
    width: 100%;
    padding: 5px;
    display: block;
    outline: none;
    margin-bottom: 10px;
`;

export const CommentButton = styled.button`
    width: 100%;
    padding: 5px;
    display: inline-block;
    border-radius: 4px;
    background-color: #ccc;
    cursor: pointer;
`;